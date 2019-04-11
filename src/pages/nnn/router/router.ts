import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 1. 定义（路由）组件。
const Home = {template: '<div>home</div>'};
const About = {template: '<div>about</div>'};
const constantRouterMap = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user',
        component: () => import('../components/userComponents/UserContent.vue'),
        redirect: '/user/personaldata',
        children: [
            {
                path: 'personaldata',
                component: () => import('../components/userComponents/PersonalData.vue')
            },
            {
                path: 'usersafety',
                component: () => import('../components/userComponents/UserSafety.vue')
            },
            {
                path: 'userorder',
                component: () => import('../components/userComponents/UserOrder.vue')
            },
            {
                path: 'usercoupon',
                component: () => import('../components/userComponents/UserCoupon.vue')
            },
            {
                path: 'userfocus',
                component: () => import('../components/userComponents/UserFocus.vue')
            },
            {
                path: 'userwallet',
                component: () => import('../components/userComponents/UserWallet.vue')
            },
        ]
    },
    {
        path: '/user.html',
        redirect: '/user.html/personaldata'
    },
    {
        path: '/user.html/personaldata',
        component: () => import('../components/userComponents/PersonalData.vue')
    },
    {
        path: '/user.html/usersafety',
        component: () => import('../components/userComponents/UserSafety.vue')
    },
    {
        path: '/user.html/userorder',
        component: () => import('../components/userComponents/UserOrder.vue')
    },
    {
        path: '/user.html/usercoupon',
        component: () => import('../components/userComponents/UserCoupon.vue')
    },
    {
        path: '/user.html/userfocus',
        component: () => import('../components/userComponents/UserFocus.vue')
    },
    {
        path: '/user.html/userwallet',
        component: () => import('../components/userComponents/UserWallet.vue')
    },

];

let routes: any = constantRouterMap;

let router = new VueRouter({
    mode: 'history',
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
