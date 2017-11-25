<template>
    <div>
        <h3>{{ title }}</h3>
        <canvas :id="id"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    props: ['title', 'id'],
    mounted () {
        if (this.id === 'lineChart') {
            let ctx = document.getElementById('lineChart').getContext('2d');
            // eslint-disable-next-line
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["10/19/17", "10/24/17", "10/29/17", "11/3/17", "11/8/17", "11/13/17", "11/18/17"],
                    datasets: [{
                        label: "Balance",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45]
                    }]
                }
            });
        } else {
            let pcx = document.getElementById('pieChart').getContext('2d');
            // eslint-disable-next-line
            const chart = new Chart(pcx, {
                type: 'doughnut',
                data: {
                    labels: ["10/19/17", "10/24/17", "10/29/17", "11/3/17", "11/8/17", "11/13/17", "11/18/17"],
                    datasets: [{
                        label: "Balance",
                        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#ff6384", "#36a2eb", "#cc65fe"],
                        data: [0, 10, 5, 2, 20, 30, 45]
                    }]
                }
            });
        }
    }
}
</script>
