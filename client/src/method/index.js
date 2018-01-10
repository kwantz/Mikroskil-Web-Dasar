import axios from 'axios'
import Chart from 'chart.js'

export default {
    getAllData () {
        axios.get('http://localhost:3000/account/' + this.accountId + '/record')
        .then((response) => {
            const mini = Math.min(5, response.data.length);
            for (let i = 0; i < mini; i++) {
                this.listRecord.push(response.data[i]);
            }
            console.log(response);
        })

        axios.get('http://localhost:3000/account/' + this.accountId)
        .then((response) => {
            this.balance = response.data.currency + ' ' + response.data.balance + ',-';
            this.balanceClass = (response.data.balance < 0) ? 'money-minus' : 'money-plus';

            console.log(response);
        })
    },

    submitForm () {
        this.objRequest.date = this.tanggal + ' ' + this.waktu;
        axios.post('http://localhost:3000/account/' + this.accountId + '/record', this.objRequest)
        .then((response) => {
            this.snackbar = true;
            console.log(response);
        })
    },

    addAccount () {
        axios.post('http://localhost:3000/account', this.objRequest)
        .then((response) => {
            console.log(response);
            location.reload();
        })
    },

    getListRecord () {
        axios.get('http://localhost:3000/account/' + this.accountId + '/record')
        .then((response) => {
            this.listRecord = response.data;
            console.log(response);
        })
    },

    getAllAccount () {
        console.log('test');
        axios.get('http://localhost:3000/account')
        .then((response) => {
            console.log(this.accounts);
            this.accounts = response.data;
            this.allAccount = (response.data.length >= 2);
            console.log(response);
        })
    },

    numberFormat (event) {
        if (event.key >= '0' && event.key <= '9') return true;
        event.preventDefault();
    },

    getChartByDay () {
        axios.get('http://localhost:3000/account/' + this.$route.params.id + '/record/chart/day')
        .then(response => {
            const len = response.data.length;
            console.log(response.data);
            for (let i = len - 10; i < len; i++) {
                const tanggal = new Date(Number(response.data[i][0]));
                const hari = tanggal.getDate();
                const bulan = tanggal.getMonth() + 1;
                const tahun = tanggal.getFullYear();

                this.arrayLineLabels.push(`${hari}/${bulan}/${tahun}`);
                this.arrayLineDatas.push(response.data[i][1]);
            }

            const chart = new Chart(document.getElementById('lineChart').getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.arrayLineLabels,
                    datasets: [{
                        label: "Balance",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: this.arrayLineDatas
                    }]
                }
            });
        })
    },

    getChartByCategory () {
        axios.get('http://localhost:3000/account/' + this.$route.params.id + '/record/chart/category')
        .then(response => {
            const len = response.data.length;
            console.log(response.data);

            response.data.forEach(dataChart => {
                this.arrayDoughnutLabels.push(dataChart[0]);
                this.arrayDoughnutDatas.push(dataChart[1]);
            });
            
            const chart = new Chart(document.getElementById('pieChart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: this.arrayDoughnutLabels,
                    datasets: [{
                        label: "Balance",
                        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#e7bd0b", "#0b4aac", "#906d88", "#33df52", "#632cac", "#60ef58", "#e0ddf8"],
                        data: this.arrayDoughnutDatas
                    }]
                }
            });
        })
    }
}
