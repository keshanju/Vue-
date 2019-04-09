import router from './router'
import { Route } from 'vue-router'



router.beforeEach((to: Route, from: Route, next: any) => {
  // alert(to.path)
  next()
})

router.afterEach(() => {
  
})
