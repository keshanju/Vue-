import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../views/Layout.vue"

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/user',
      children: [
        {
          path: 'user',
          component: () => import( '@/pages/nnn/components/userComponents/OrderCheck.vue'),
        }
      ]
    }
  ]
})

