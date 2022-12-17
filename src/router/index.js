import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/LandingPage.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/RegisterPage.vue'),
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../components/LoginPage.vue'),
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
            },
            {
                path: '/Admin/Users/Create',
                name: 'create users',
                meta: { title: 'Create Users' },
                component: () =>
                    import ('../components/Admin/UsersComponent/AdminUsersCreateComponent.vue')
            },
            {
                path: '/Admin/Users/Show/:user',
                name: 'show users',
                meta: { title: 'Show Users' },
                component: () =>
                    import ('../components/Admin/UsersComponent/AdminUsersShowComponent.vue')
            },
            {
                path: '/Admin/Users/Update/:user',
                name: 'update users',
                meta: { title: 'Update Users' },
                component: () =>
                    import ('../components/Admin/UsersComponent/AdminUsersUpdateComponent.vue')
            },
            {
                path: '/Admin/Books',
                name: 'books',
                meta: { title: 'Books' },
                component: () =>
                    import ('../components/Admin/BooksComponent/AdminBooksReadComponent.vue')
            },
            {
                path: '/Admin/Books/Create',
                name: 'create books',
                meta: { title: 'Create Books' },
                component: () =>
                    import ('../components/Admin/BooksComponent/AdminBooksCreateComponent.vue')
            },
            {
                path: '/Admin/Books/Show/:book',
                name: 'show books',
                meta: { title: 'Show books' },
                component: () =>
                    import ('../components/Admin/BooksComponent/AdminBooksShowComponent.vue')
            },
            {
                path: '/Admin/Books/Update/:book',
                name: 'update books',
                meta: { title: 'Update Books' },
                component: () =>
                    import ('../components/Admin/BooksComponent/AdminBooksUpdateComponent.vue')
            },
            {
                path: '/Admin/Subscriptions',
                name: 'subscriptions',
                meta: { title: 'Subscriptions' },
                component: () =>
                    import ('../components/Admin/SubscriptionsComponent/AdminSubscriptionsReadComponent.vue')
            },
            {
                path: '/Admin/Subscriptions/Create',
                name: 'create subscription',
                meta: { title: 'Create Subscription' },
                component: () =>
                    import ('../components/Admin/SubscriptionsComponent/AdminSubscriptionsCreateComponent.vue')
            },
            {
                path: '/Admin/Subscriptions/Show/:subscription',
                name: 'show subscriptions',
                meta: { title: 'Show Subscriptions' },
                component: () =>
                    import ('../components/Admin/SubscriptionsComponent/AdminSubscriptionsShowComponent.vue')
            },
            {
                path: '/Admin/Subscriptions/Update/:book',
                name: 'update subscriptions',
                meta: { title: 'Update Subscriptions' },
                component: () =>
                    import ('../components/Admin/SubscriptionsComponent/AdminSubscriptionsUpdateComponent.vue')
            }
        ],
        path: '/Customer',
        name: 'Customer',
        component: () =>
            import ('../components/Customer/Component.vue'),
        children: [{
                path: '/Customer/HomePage',
                name: 'HomePage',
                component: () =>
                    import ('../components/Customer/HomePage.vue')
            },
            {
                path: '/Customer/DetailProduct',
                name: 'DetailProduct',
                component: () =>
                    import ('../components/Customer/DetailProduct.vue')
            },

        ],

    }
]

const router = new VueRouter({
    routes
})

export default router