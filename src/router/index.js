import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/Admin/AdminLayout.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
