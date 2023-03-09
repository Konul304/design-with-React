import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import './css/chart.css'

export default function ChartComponent() {
    const data = [
        { year: 'Yan', count: 10 },
        { year: 'Fev', count: 20 },
        { year: "Mar", count: 30 },
        { year: "İyun", count: 40 },
        { year: "İyul", count: 50 },
        { year: "Avq", count: 60 },
        { year: "Sen", count: 70 },
        { year: "Okt", count: 80 },
        { year: "Noy", count: 90 },
        { year: "Dek", count: 100 },
    ];
    (async function () {

        new Chart(
            document.getElementById('myChart'),
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count),
                            backgroundColor: '#233B82',
                            borderRadius: 10,
                        }
                    ]
                }
            }
        );

        // myChart.destroy()

    })()

    return (
        <>
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </>
    )
}