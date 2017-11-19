<template>
    <v-layout row wrap>

        <v-flex xs6 class="white border-bottom with-padding">
            <h3>Balance</h3>
            <h1 class="money-plus">IDR 7.530.089,-</h1>
        </v-flex>

        <v-flex xs6 class="text-xs-right white border-bottom with-padding">
            <v-btn dark color="green darken-1">new record</v-btn>
        </v-flex>

        <v-flex xs7 class="white border-right with-padding">
            <h3>Last Records Overview</h3>
            <div v-for="record in wow" :key="record.date">
                <record :record="record"/>
            </div>
            <v-btn dark color="green darken-1">load more</v-btn>
        </v-flex>

        <v-flex xs5 class="white with-padding">
            <chart title="Balance Chart" id="lineChart"/>
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
                { title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'},
                { title: 'Financial Expenses', note: 'Biaya Transfer ke BNI Kelolaapp', money: '- IDR 7.500,-', date: '11/17/2017'}
            ]
        }
    }
}
</script>
