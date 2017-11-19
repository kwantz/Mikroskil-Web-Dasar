<template>
    <v-layout row wrap>
        <v-flex xs9 class="with-padding">
            <h2>{{ record.title }}</h2>
            <h3>{{ record.note }}</h3>
        </v-flex>
        <v-flex xs3 class="text-xs-right with-padding">
            <h2 class="money-minus">{{ record.money }}</h2>
            <h4>{{ record.date }}</h4>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['record']
}
</script>
