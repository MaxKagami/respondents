import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'consultations',
    meta: {
      breadcrumb: [ { name: 'Опросы' } ]
    },
    component: () => import('./components/ConsultationsNewIndex')
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      breadcrumb: [ { name: 'Польователи' } ]
    },
    component: () => import('./components/Users')
  },
  {
    path: '/blacklists',
    name: 'blacklists',
    meta: {
      breadcrumb: [ { name: 'Чёрный список' } ]
    },
    component: () => import('./components/Blacklists')
  },
  {
    path: '/callcenter',
    name: 'callcenter',
    meta: {
      breadcrumb: [ { name: 'Колл-центр' } ]
    },
    component: () => import('./components/Callcenter')
  }
]

const router = new Router({
  scrollBehavior() { return { x: 0, y: 0 } },
  mode: "history",
  base: process.env.BASE_URL,
  routes
})
export default router
