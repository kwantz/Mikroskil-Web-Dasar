<template>
    <v-layout row wrap>
        <v-flex xs7 class="white border-right with-padding" style="overflow-y: scroll; height: 650px;">
            <h3>Dompet Records Overview</h3>
            <div v-for="record in listRecord" :key="record.id">
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
import method from '../method'
import chart from './chart'
import record from './record'

export default {
    methods: method,
    components: { record, chart },

    beforeMount () { this.getListRecord(); },
    data () {
        return {
            listRecord: [],
            accountId: this.$route.params.id
        }
    }
}
</script>
