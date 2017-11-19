import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Account from '@/components/Account'
import ListRecord from '@/components/ListRecord'
import AddRecord from '@/components/AddRecord'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/account/:id',
            name: 'Account',
            component: Account
        },
        {
            path: '/account/:id/record',
            name: 'ListRecord',
            component: ListRecord
        },
        {
            path: '/account/:id/add',
            name: 'AddRecord',
            component: AddRecord
        }
    ]
})
