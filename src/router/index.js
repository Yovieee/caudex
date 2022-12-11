import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/LandingPage.vue')
    },
    {
        path: '/Admin',
        name: 'admin',
        component: () =>
            import ('../components/Admin/AdminLayout.vue'),
        children: [{
                path: '/Admin/Dashboard',
                name: 'dashboard',
                meta: { title: 'Dashboard' },
                component: () =>
                    import ('../components/Admin/AdminDashboardComponent.vue')
            },
            {
                path: '/Admin/Users',
                name: 'users',
                meta: { title: 'Users' },
                component: () =>
                    import ('../components/Admin/UsersComponent/AdminUsersReadComponent.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../components/User/Component.vue'),
        children: [{
            path: '/Admin/HomePage',
            name: 'HomePage',
            meta: { title: 'HomePage' },
            component: () =>
                import ('../components/User/HomePage.vue')
        }]

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
    },


]

const router = new VueRouter({
    routes
})

export default router