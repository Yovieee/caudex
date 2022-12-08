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
    path: '/Admin',
    name: 'admin',
    component: () => import('../components/Admin/AdminLayout.vue'),
    children: [
      {
        path: '/Admin/Dashboard',
        name: 'dashboard',
        meta: { title: 'Dashboard' },
        component: () => import('../components/Admin/AdminDashboardComponent.vue')
      },
      {
        path: '/Admin/Users',
        name: 'users',
        meta: { title: 'Users' },
        component: () => import('../components/Admin/UsersComponent/AdminUsersReadComponent.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
