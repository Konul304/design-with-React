import Chart from 'chart.js/auto';
import './css/chart.css'

export default function ChartComponent() {
    const data = [
        { year: 2017, count: '10K' },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];
    (async function () {

        let myChart = new Chart(
            document.getElementById('myChart'),
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count),
                            backgroundColor:'#F5F6F8',
                            borderRadius:'10px',
                        }
                    ]
                }
            }
        );

        myChart.destroy();

        myChart = new Chart(
            document.getElementById('myChart'),
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions',
                            data: data.map(row => row.count)
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