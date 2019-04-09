import Vue from 'vue';
import Router from 'vue-router';
import  personaData from "../components/userComponents/PersonalData.vue";

Vue.use(Router)

const constantRouterMap = [
    {
        path: '/',
        component: personaData
    },
    // {
    //     path: '/personaldata',
    //     name: 'PersonalData',
    //     component: () => import('../components/userComponents/PersonalData.vue')
    // },
    // {
    //     path: '/usersafety',
    //     name: 'UserSafety',
    //     component: () => import('../components/userComponents/UserSafety.vue')
    // },
    // {
    //     path: '/userorder',
    //     name: 'UserOrder',
    //     component: () => import('../components/userComponents/UserOrder.vue')
    // },
]

let routes: any = constantRouterMap

let router = new Router({
    routes
});

export default router
