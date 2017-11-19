<template>
    <v-layout row wrap>
        <v-flex xs7 class="white border-right with-padding" style="overflow-y: scroll; height: 650px;">
            <h3>Dompet Records Overview</h3>
            <div v-for="record in wow" :key="record.id">
                <record :record="record"/>
            </div>
        </v-flex>

        <v-flex xs5 class="white pos-fix" style="height: 650px;">
            <v-flex xs12 class="border-bottom with-padding">
                <chart title="Expenses Structure" id="pieChart"/>
            </v-flex>
            <v-flex xs12 class="with-padding">
                <chart title="Balance Chart" id="lineChart"/>
            </v-flex>
        </v-flex>
    </v-layout>
</template>

<script>
import chart from './chart'
import record from './record'

export default {
    components: { record, chart },
    data () {
        return {
            wow: [
                { id: 1, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 2, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 3, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 4, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 5, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 6, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 7, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 8, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 9, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 10, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 11, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 12, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { id: 13, title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'}
            ]
        }
    }
}
</script>
