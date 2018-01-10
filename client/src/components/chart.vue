<template>
    <div>
        <h3>{{ title }}</h3>
        <canvas :id="id"></canvas>
    </div>
</template>

<script>
import method from '../method'
import Chart from 'chart.js'

export default {
    props: ['title', 'id'],
    methods: method,
    data () {
        return {
            arrayLineLabels: [],
            arrayLineDatas: [],
            arrayDoughnutLabels: [],
            arrayDoughnutDatas: []
        }
    },
    mounted () {
        if (this.id === 'lineChart') {
            this.getChartByDay()
        } else {
            this.getChartByCategory()
        }
    }
}
</script>
