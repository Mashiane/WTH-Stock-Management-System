import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routerOptions = [
  {
    path: '/signup',
    component: 'SignUp'
  },
  {
    path: '/signin',
    component: 'Signin'
  },
  {
    path: '/login',
    component: 'Login'
  },
  {
    path: '/',
    component: 'Home'
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`)
  }
})

export default new Router({
  mode: 'history',
  routes
})
