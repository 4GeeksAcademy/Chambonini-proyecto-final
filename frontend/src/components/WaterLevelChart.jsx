import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const WaterLevelChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Nivel (cm)",
        data: data.map((d) => d.level_cm),
        borderColor: "blue",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="card p-3">
      <h5>📈 Historial (últimos niveles)</h5>
      <Line data={chartData} />
    </div>
  );
};

export default WaterLevelChart;
