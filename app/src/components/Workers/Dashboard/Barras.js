import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Barras() {
  const [label, setLabel] = useState();
  const [df1, setDf1] = useState();
  const [df2, setDf2] = useState();

  const peticionApi = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/preparaciones/`)
      .then((Response) => {
        var respuesta = Response.data;
        var auxLabel = [];
        var auxDf1 = [];
        var auxDf2 = [];
        respuesta.map((elemento) => {
          auxLabel.push(elemento.nombre);
          auxDf1.push(elemento.Valor);
          auxDf2.push(elemento.Valor_preparacion);
        });

        setLabel(auxLabel);
        setDf1(auxDf1);
        setDf2(auxDf2);
      });
  };
  useEffect(() => {
    peticionApi();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels: label,
    datasets: [
      {
        label: "Precio venta",
        data: df1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Costo preparación",
        data: df2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
