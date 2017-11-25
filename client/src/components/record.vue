<template>
    <v-layout row wrap>
        <v-flex xs7 class="with-padding">
            <h2>{{ record.category }}</h2>
            <h3>{{ record.note }}</h3>
        </v-flex>
        <v-flex xs5 class="text-xs-right with-padding">
            <h2 v-if="record.type === '+'" class="money-plus">
                + {{ record.currency }} {{ record.amount }}
            </h2>
            <h2 v-if="record.type === '-'" class="money-minus">
                - {{ record.currency }} {{ record.amount }}
            </h2>
            <h4>{{ record.date }}</h4>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['record']
}
</script>
