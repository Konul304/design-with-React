import Chart from 'chart.js/auto';
import './css/chart.css'

export default function ChartComponent() {
    const data = [
        { year: 'Yan', count: 30 },
        { year: 'Fev', count: 20 },
        { year: "Mar", count: 40 },
        { year: "Apr", count: 20 },
        { year: "May", count: 40 },
        { year: "İyun", count: 20 },
        { year: "İyul", count: 30 },
        { year: "Avq", count: 50 },
        { year: "Sen", count: 20 },
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
                            label: 'cost',
                            data: data.map(row => row.count),
                            backgroundColor: '#F5F6F8',
                            borderRadius: 8,
                            borderSkipped: false,
                            barThickness: 34,
                            hoverBackgroundColor: '#233B82',
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        y: {
                            ticks: { color: '#777D8B', beginAtZero: false, font: 12 },
                            grid: {
                                color:'#F5F6F8',
                            },
                            border: {
                                display: false,
                                dash: [4,4],
                            },
                        },
                        x: {
                            ticks: { color: '#777D8B', beginAtZero: true, font: 1 },
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
                            stacked: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false 
                          }
                    }
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