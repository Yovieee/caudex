import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/HomeView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import ('../components/Admin/AdminLayout.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/RegisterPage.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router