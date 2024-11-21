"use client";

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
import { useTheme } from "next-themes";
import { useMemo } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    horizontal?: boolean;
    label: string;
    data: number[];
    labels: string[];
}

export default function BarChart({ horizontal = false, label, data, labels }: BarChartProps) {
    const { theme } = useTheme();

    const truncate = (text: string, length: number) =>
        text.length > length ? `${text.slice(0, length)}…` : text;

    const dataSet = {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor: "rgb(190 24 93)",
                borderColor: "rgb(190 24 93)",
                borderWidth: 1,
            },
        ],
    };

    const options = useMemo(
        () => ({
            indexAxis: horizontal ? ("y" as const) : ("x" as const),
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
                            return truncate(label, 10); // Trunca el label a 10 caracteres
                        },
                    },
                    grid: {
                        color: theme === "dark" ? "#444444" : "#cccccc",
                    },
                },
                y: {
                    ticks: {
                        color: theme === "dark" ? "#ffffff" : "#000000",
                        callback: function (value: string | number, index: number) {
                            const label = labels[index] || "";
                            return truncate(label, 10); // Trunca el label a 10 caracteres
                        },
                    },
                    grid: {
                        color: theme === "dark" ? "#444444" : "#cccccc",
                    },
                },
            },
        }),
        [horizontal, theme, labels]
    );

    return (
        <div className="w-full">
            <Bar data={dataSet} options={options} />
        </div>
    );
}
