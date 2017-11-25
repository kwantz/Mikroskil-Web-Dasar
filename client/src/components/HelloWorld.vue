<template>
    <v-layout row wrap>
        <v-flex text-xs-right xs12 md4 class="img-logo">
            <img src='../assets/logo_Wallet.png'>
        </v-flex>
        <v-flex text-xs-center text-md-left xs12 md8>
            <v-layout row wrap class="homepage-vue">
                <v-flex xs12>
                    <h1>Wallet</h1>
                </v-flex>
                <v-flex xs12>
                    <h2>The Your Finances in One Place.</h2>
                    <h3 class="mb-3">Flexibly budget and track your spending, so you stay in control and achieve your goals.</h3>
                </v-flex>
                <v-flex xs12 sm8 md6 lg4>
                    <v-btn dark round href='' color="green darken-1">Google Play</v-btn>
                </v-flex>
                <v-flex xs12 sm8 md6 lg4>
                    <v-btn round outline href='' color='green darken-1'>App Store</v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs6 offset-xs3>
            <v-layout column wrap dark>
                <h1 class="pl-3 pt-1 pb-1 mt-5 green darken-1 color-white">Add Account</h1>
                <v-form class="pl-3 pr-3 mt-3">
                    <v-text-field
                        v-model="objRequest.name"
                        label="Name"
                        required
                    />
                    <v-btn dark color="green darken-1" v-on:click="addAccount">Submit</v-btn>
                </v-form>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import method from '../method';

export default {
    name: 'HelloWorld',
    methods: method,

    data () {
        return {
            accountId: this.$route.params.id,
            objRequest: {
                name: "",
                balance: 0,
                currency: "IDR"
            },
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
