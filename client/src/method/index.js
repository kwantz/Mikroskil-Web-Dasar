import axios from 'axios'

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
    }
}
