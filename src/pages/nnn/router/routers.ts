import Vue from 'vue';
import Router from 'vue-router';
import PersonalData from '../components/userComponents/PersonalData.vue';
import UserSafety from '../components/userComponents/UserSafety.vue';
import UserOrder from '../components/userComponents/UserOrder.vue';
//  使用路由
Vue.use(Router);
export default class Routers {

}
const routes = [
    {
        path: '/',
        redirect: '/personaldata'
    },
    {
        path: '/personaldata',
        name: 'PersonalData',
        component: () => import('../components/userComponents/PersonalData.vue')
    },
    {
        path: '/usersafety',
        name: 'UserSafety',
        component: () => import('../components/userComponents/UserSafety.vue')
    },
    {
        path: '/userorder',
        name: 'UserOrder',
        component: () => import('../components/userComponents/UserOrder.vue')
    },
];
const router = new Router({
        routes: routes
    }
);
new Vue({
    router
}).$mount('#app')
