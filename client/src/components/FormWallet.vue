<template>
    <v-form xs12 class="input-form">
        <v-layout row wrap>
            <v-flex xs12>
                <v-select bottom v-bind:items="items" v-model="objRequest.category" label="Category" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Amount" v-model="objRequest.amount" v-on:keypress="numberFormat" required/>
            </v-flex>
            <v-flex xs6>
                <v-select bottom v-bind:items="currencys" v-model="objRequest.currency" label="Currency" required/>
            </v-flex>
            <v-flex xs12>
                <v-text-field label="Note" v-model="objRequest.note"/>
            </v-flex>
            <v-flex xs6>
                <v-dialog persistent lazy full-width width="290px">
                    <v-text-field slot="activator" label="Picker in dialog" v-model="tanggal" prepend-icon="event" readonly/>
                    <v-date-picker v-model="tanggal" scrollable actions>
                        <template slot-scope="{ save, cancel }">
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                            </v-card-actions>
                        </template>
                    </v-date-picker>
                </v-dialog>
            </v-flex>
            <v-flex xs6>
                <v-dialog persistent lazy full-width width="290px">
                    <v-text-field slot="activator" label="Picker in dialog" v-model="waktu" prepend-icon="access_time" readonly/>
                    <v-time-picker v-model="waktu" actions format="24hr">
                        <template slot-scope="{ save, cancel }">
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                            </v-card-actions>
                        </template>
                    </v-time-picker>
                </v-dialog>
            </v-flex>
            <slot/>
            <v-btn dark color="green darken-1" v-on:click="submitForm">Submit</v-btn>
        </v-layout>
        <v-snackbar :timeout="3000" :bottom="true" :vertical="true" v-model="snackbar">
            Form berhasil di submit
            <v-btn flat color="green" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-form>
</template>

<script>
import method from '../method'

export default {
    props: ['name'],
    methods: method,

    data () {
        return {
            snackbar: false,
            accountId: this.$route.params.id,
            tanggal: null,
            waktu: null,
            objRequest: {
                category: '',
                amount: 0,
                currency: 'IDR',
                note: '',
                date: '2017-10-10 10:10',
                type: (this.name === 'income') ? '+' : '-'
            },
            items: [
                'Food & Drinks',
                'Shopping',
                'Housing',
                'Transportation',
                'Vehicle',
                'Life & Entertainment',
                'Communication, PC',
                'Financial expenses',
                'Investments',
                'Income',
                'Others'
            ],
            currencys: [ 'IDR' ]
        }
    }
}
</script>
