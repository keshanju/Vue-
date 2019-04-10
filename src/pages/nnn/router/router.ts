import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//
// export const constantRouterMap = [
//     {
//         path: '/personaldata',
//         name: 'PersonalData',
//         component: () => import('../components/userComponents/PersonalData.vue')
//     },
//     {
//         path: '/usersafety',
//         name: 'UserSafety',
//         component: () => import('../components/userComponents/UserSafety.vue')
//     },
//     {
//         path: '/userorder',
//         name: 'UserOrder',
//         component: () => import('../components/userComponents/UserOrder.vue')
//     },
// ];
//
// let routes: any = constantRouterMap;
//
// let router  = new VueRouter({
//     routes
// });
// export default router
// 1. 定义（路由）组件。
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
export const routes = [
    { path: '/home', component: Foo },
    { path: '/about', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes
});
export default router
