import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";

import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Grafico() {
  const today = getCurrentDatelf("-");

  const [nombre, setNombre] = useState([]);
  const [stock_critico, setStock_critico] = useState([]);
  const [stock_actual, setStock_actual] = useState([]);

  const peticionApi = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/pedidos/?created_at__gte=${today}`)
      .then((Response) => {
        var respuesta = Response.data;
        var auxNombre = [],
          auxStock_critico = [],
          auxStock_actual = [];
        respuesta.map((elemento) => {
          if (auxNombre.indexOf(hour(elemento.created_at)) === -1) {
            auxNombre.push(hour(elemento.created_at));
            auxStock_critico.push(1);
          } else {
            auxStock_critico[auxNombre.indexOf(hour(elemento.created_at))] =
              auxStock_critico[auxNombre.indexOf(hour(elemento.created_at))] +
              1;
          }
        });
        setNombre(auxNombre);
        setStock_critico(auxStock_critico);
        setStock_actual(auxStock_actual);
      });
  };
  useEffect(() => {
    peticionApi();
  }, []);

  const data = {
    labels: nombre,
    datasets: [
      {
        label: "Numero de ventas",
        fill: false,
        backgroundColor: "rgba(80, 155, 243, 1)",
        borderColor: "rgba(80, 155, 243, 1)",
        pointBorderColor: "rgba(80, 155, 243, 1)",
        pointBorderWidth: "1",
        pointHoverRadius: "5",
        pointHoverBackgroundColor: "rgba(80, 155, 243, 1)",
        pointHoverBorderColor: "rgba(80, 155, 243, 1)",
        pointRadius: "1",
        pointHitRadius: "10",
        data: stock_critico,
      },
      // {
      //   label: "Stock crítico de productos",
      //   fill: false,
      //   backgroundColor: "rgba(20, 300, 243, 1)",
      //   borderColor: "rgba(20, 300, 243, 1)",
      //   pointBorderColor: "rgba(20, 300, 243, 1)",
      //   pointBorderWidth: "1",
      //   pointHoverRadius: "5",
      //   pointHoverBackgroundColor: "rgba(20, 300, 243, 1)",
      //   pointHoverBorderColor: "rgba(20, 300, 243, 1)",
      //   pointRadius: "1",
      //   pointHitRadius: "10",
      //   data: stock_critico,
      // },
    ],
  };

  return (
    <div className="Grafico">
      <Line data={data} />
    </div>
  );
}

export function hour(date) {
  let fecha = new Date(date);
  let hour = fecha.getHours();
  return hour;
}
export function getCurrentDatelf(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
