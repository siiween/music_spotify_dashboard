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

export default function BarChart({horizontal = false, label, data, labels } : BarChartProps) {
    const { theme } = useTheme();

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
    }

    const options = useMemo(
        () => ({
            indexAxis: horizontal ? "x" as const : "y" as const,
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
        [theme]
    );

    return (
        <div className="w-full">
            <Bar data={dataSet} options={options} />
        </div>
    );
}
