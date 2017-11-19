<template>
    <v-form xs12 class="input-form">
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field label="Category" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Amount" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Currency" required/>
            </v-flex>
            <v-flex xs12>
                <v-text-field label="Note" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Date" required/>
            </v-flex>
            <v-flex xs6>
                <v-text-field label="Time" required/>
            </v-flex>
            <slot/>
            <v-btn dark color="green darken-1">Submit</v-btn>
        </v-layout>
    </v-form>
</template>
