import Chart from 'chart.js/auto';
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
                            label: 'cost',
                            data:data.map(row => row.count),
                            backgroundColor: '#F5F6F8',
                            borderRadius: 10,
                            barThickness: 34,
                            hoverBackgroundColor: '#233B82',
                            
                            // borderWidth: 1,
                            // categoryPercentage: 2, 
                            // barPercentage: 1,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            ticks: { color: 'black', beginAtZero: false, font: 12 },
                            grid: {
                                display: false
                            },
                            border: {
                                display: false,
                            },
                        },
                        x: {
                            ticks: { color: 'black', beginAtZero: true, font: 1 },
                            grid: {
                                display: false
                            },
                            border: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: {

                            display: false
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