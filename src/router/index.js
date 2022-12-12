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
        path: '/Customer',
        name: 'Customer',
        component: () =>
            import ('../components/Customer/Component.vue'),
        children: [{
                path: '/Customer/HomePage',
                name: 'HomePage',
                meta: { title: 'HomePage' },
                component: () =>
                    import ('../components/Customer/HomePage.vue'),
            },
            {

                path: '/Customer/DetailProduct',
                name: 'DetailProduck',
                meta: { title: 'DetailProduct' },
                component: () =>
                    import ('../components/Customer/DetailProduct.vue'),
            }
        ]

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