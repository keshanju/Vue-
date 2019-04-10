import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 1. 定义（路由）组件。
const Home = {template: '<div>home</div>'};
const About = {template: '<div>about</div>'};
export const constantRouterMap = [
    {
        path: '/',
        redirect: 'usercenter'
    },
    {
        path: '/home',
        name: Home,
        component: Home
    },
    {
        path: '/about',
        name: About,
        component: About
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
    {
        path: '/usercoupon',
        name: 'UserCoupon',
        component: () => import('../components/userComponents/UserCoupon.vue')
    },
    {
        path: '/userfocus',
        name: 'UserFocus',
        component: () => import('../components/userComponents/UserFocus.vue')
    },
    {
        path: '/userwallet',
        name: 'UserWallet',
        component: () => import('../components/userComponents/UserWallet.vue')
    },
];

let routes: any = constantRouterMap;

let router = new VueRouter({
    routes
});
export default router
// 1. 定义（路由）组件。
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };
//
// // 2. 定义路由
// export const routes = [
//     { path: '/home', component: Foo },
//     { path: '/about', component: Bar }
// ];
//
// // 3. 创建 router 实例，然后传 `routes` 配置
// const router = new VueRouter({
//     mode: 'history',
//     routes: routes
// });
// export default router
