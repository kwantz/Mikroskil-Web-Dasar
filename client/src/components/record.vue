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
            <h4>{{ tanggal }}</h4>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data () {
        return {
            tanggal: null,
        }
    },
    props: ['record'],
    beforeMount() {
        const arrayWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        const arrayMonth = ['Januari', 'Februari', 'Maret', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'] 
        const date = new Date(this.record.date);
        
        this.tanggal = `${arrayWeek[date.getDay()]}, ${date.getDate()} ${arrayMonth[date.getMonth()]} ${date.getFullYear()}`;
        console.log(date.toString());
    }
}
</script>
