import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Main')
  },
  {
    path: '/SelectDiff',
    name: 'selectDiff',
    component: () => import('@/views/SelectDiff')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


export default router
