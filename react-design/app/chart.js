import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import './css/chart.css'

export default function ChartComponent() {
    const data = [
        { year: 'Yan', count: 20 },
        { year: 'Fev', count: 50 },
        { year: "Mar", count: 30 },
        { year: "İyun", count: 40 },
        { year: "İyul", count: 30 },
        { year: "Avq", count: 50 },
        { year: "Sen", count: 30 },
        { year: "Okt", count: 40 },
        { year: "Noy", count: 20 },
        { year: "Dek", count: 30 },
    ];
    (async function () {

        let chartStatus = Chart.getChart("myChart");
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }

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

    })()

    return (
        <>
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </>
    )
}