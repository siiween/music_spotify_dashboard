"use client";

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
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";
import { useMemo } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  label: string;
  data: number[];
  labels: string[];
}

export default function LineChart({ label, data, labels }: LineChartProps) {
  const { theme } = useTheme();

  const truncate = (text: string, length: number) =>
    text.length > length ? `${text.slice(0, length)}…` : text;

  const dataSet = {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: "rgb(190 24 93)",
        backgroundColor: "rgba(190, 24, 93, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: theme === "dark" ? "#ffffff" : "#000000",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: theme === "dark" ? "#ffffff" : "#000000",
            callback: function (value: string | number, index: number) {
              const label = labels[index] || "";
              return truncate(label, 10); // Trunca las etiquetas a 10 caracteres
            },
          },
          grid: {
            color: theme === "dark" ? "#444444" : "#cccccc",
          },
        },
        y: {
          ticks: {
            color: theme === "dark" ? "#ffffff" : "#000000",
          },
          grid: {
            color: theme === "dark" ? "#444444" : "#cccccc",
          },
        },
      },
    }),
    [theme, labels]
  );

  return (
    <div className="w-full">
      <Line data={dataSet} options={options} />
    </div>
  );
}
