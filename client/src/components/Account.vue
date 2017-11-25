<template>
    <v-layout row wrap>

        <v-flex xs6 class="white border-bottom with-padding">
            <h3>Balance</h3>
            <h1 :class="balanceClass">{{ balance }}</h1>
        </v-flex>

        <v-flex xs6 class="text-xs-right white border-bottom with-padding">
            <v-btn dark color="green darken-1" :to="{ name: 'AddRecord', params: { id: accountId } }">new record</v-btn>
        </v-flex>

        <v-flex xs7 class="white border-right with-padding">
            <h3>Last Records Overview</h3>
            <div v-for="record in listRecord" :key="record.id">
                <record :record="record"/>
            </div>
            <v-btn dark color="green darken-1" :to="{ name: 'ListRecord', params: { id: accountId } }">load more</v-btn>
        </v-flex>

        <v-flex xs5 class="white with-padding">
            <chart title="Balance Chart" id="lineChart"/>
        </v-flex>

    </v-layout>
</template>

<script>
import method from '../method'
import chart from './chart'
import record from './record'

export default {
    methods: method,
    components: { record, chart },

    beforeMount () { this.getAllData(); },
    data () {
        return {
            balance: '',
            balanceClass: '',
            listRecord: [],
            accountId: this.$route.params.id
        }
    }
}
</script>
