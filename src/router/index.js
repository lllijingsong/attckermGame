import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/Attacker',
    name: 'Attacker',
    component: () => import('@/views/Main')
  },
  {
    path: '/Defense',
    name: 'Defense',
    component: () => import('@/views/Defense')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(store.state.app.user)
  if (to.name === null) next({ path: '/404' })
  // if (to.name === 'Attacker') {
  //   let name = localStorage.getItem('identity')
  //   if (name === '攻击者') next()
  //   else next({ path: '/404' })
  // } else if (to.name === 'Defense') {
  //   let name = localStorage.getItem('identity')
  //   if (name === '防御者') next()
  //   else next({ path: '/404' })
  // } 
  else {
    next()
  }
})

export default router
