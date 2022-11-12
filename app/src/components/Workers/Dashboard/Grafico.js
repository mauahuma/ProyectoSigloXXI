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
  const [nombre, setNombre] = useState([]);
  const [stock_critico, setStock_critico] = useState([]);
  const [stock_actual, setStock_actual] = useState([]);

  const peticionApi = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/productos/?necesita_Stock=true")
      .then((Response) => {
        var respuesta = Response.data;
        var auxNombre = [],
          auxStock_critico = [],
          auxStock_actual = [];
        respuesta.map((elemento) => {
          console.log(Response.data);
          auxNombre.push(elemento.nombre);
          auxStock_critico.push(elemento.stock_critico);
          auxStock_actual.push(elemento.stock_actual);
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
        label: "Stock actual de productos",
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
        data: stock_actual,
      },
      {
        label: "Stock crítico de productos",
        fill: false,
        backgroundColor: "rgba(20, 300, 243, 1)",
        borderColor: "rgba(20, 300, 243, 1)",
        pointBorderColor: "rgba(20, 300, 243, 1)",
        pointBorderWidth: "1",
        pointHoverRadius: "5",
        pointHoverBackgroundColor: "rgba(20, 300, 243, 1)",
        pointHoverBorderColor: "rgba(20, 300, 243, 1)",
        pointRadius: "1",
        pointHitRadius: "10",
        data: stock_critico,
      },
    ],
  };

  return (
    <div className="Grafico">
      <Line data={data} />
    </div>
  );
}
