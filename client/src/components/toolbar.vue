<template>
    <v-toolbar fixed class="green darken-1">
        <v-toolbar-title>
            <router-link :to="{ name: 'HelloWorld' }">Financial Management</router-link>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-if="allAccount" flat>All Account</v-btn>
            <v-btn v-for="(account, index) in accounts" flat :to="{ name: 'Account', params: { id: account.id } }" :key="account.id">
                {{ account.name }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import method from '../method';

export default {
    methods: method,

    beforeMount () { this.getAllAccount() },
    data () {
        return {
            allAccount: false,
            accounts: []
        }
    }
}
</script>
