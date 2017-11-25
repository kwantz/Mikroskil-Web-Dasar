<template>
    <v-form xs12 class="input-form">
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field label="Category" v-model="objRequest.category" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Amount" v-model="objRequest.amount" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Currency" v-model="objRequest.currency" required/>
            </v-flex>
            <v-flex xs12>
                <v-text-field label="Note" v-model="objRequest.note" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Date" v-model="objRequest.date" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Time" v-model="objRequest.date" required/>
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
            objRequest: {
                category: '',
                amount: 0,
                currency: 'IDR',
                note: '',
                date: '2017-10-10 10:10',
                type: (this.name === 'income') ? '+' : '-'
            }
        }
    }
}
</script>
