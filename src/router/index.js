import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/LandingPage.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../components/RegisterPage.vue"),
	},
	{
		path: "/Login",
		name: "Login",
		component: () => import("../components/LoginPage.vue"),
	},
	{
		path: "/Admin/:user/:access_token",
		name: "admin",
		component: () => import("../components/Admin/AdminLayout.vue"),
		children: [
			{
				path: "/Admin/:user/:access_token/Dashboard",
				name: "dashboard",
				meta: { title: "Dashboard" },
				component: () =>
					import("../components/Admin/AdminDashboardComponent.vue"),
			},
			{
				path: "/Admin/:user/:access_token/Users",
				name: "users",
				meta: { title: "Users" },
				component: () =>
					import(
						"../components/Admin/UsersComponent/AdminUsersReadComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Users/Create",
				name: "create users",
				meta: { title: "Create Users" },
				component: () =>
					import(
						"../components/Admin/UsersComponent/AdminUsersCreateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Users/Show/:selectedUser",
				name: "show users",
				meta: { title: "Show Users" },
				component: () =>
					import(
						"../components/Admin/UsersComponent/AdminUsersShowComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Users/Update/:selectedUser",
				name: "update users",
				meta: { title: "Update Users" },
				component: () =>
					import(
						"../components/Admin/UsersComponent/AdminUsersUpdateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Books",
				name: "books",
				meta: { title: "Books" },
				component: () =>
					import(
						"../components/Admin/BooksComponent/AdminBooksReadComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Books/Create",
				name: "create books",
				meta: { title: "Create Books" },
				component: () =>
					import(
						"../components/Admin/BooksComponent/AdminBooksCreateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Books/Show/:book",
				name: "show books",
				meta: { title: "Show books" },
				component: () =>
					import(
						"../components/Admin/BooksComponent/AdminBooksShowComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Books/Update/:book",
				name: "update books",
				meta: { title: "Update Books" },
				component: () =>
					import(
						"../components/Admin/BooksComponent/AdminBooksUpdateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Subscriptions",
				name: "subscriptions",
				meta: { title: "Subscriptions" },
				component: () =>
					import(
						"../components/Admin/SubscriptionsComponent/AdminSubscriptionsReadComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Subscriptions/Create",
				name: "create subscription",
				meta: { title: "Create Subscription" },
				component: () =>
					import(
						"../components/Admin/SubscriptionsComponent/AdminSubscriptionsCreateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Subscriptions/Show/:subscription",
				name: "show subscriptions",
				meta: { title: "Show Subscriptions" },
				component: () =>
					import(
						"../components/Admin/SubscriptionsComponent/AdminSubscriptionsShowComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Subscriptions/Update/:subscription",
				name: "update subscriptions",
				meta: { title: "Update Subscriptions" },
				component: () =>
					import(
						"../components/Admin/SubscriptionsComponent/AdminSubscriptionsUpdateComponent.vue"
					),
			},
			{
				path: "/Admin/:user/:access_token/Analytics",
				name: "analytics",
				meta: { title: "Analytics" },
				component: () =>
					import(
						"../components/Admin/AdminAnalyticsComponent.vue"
					),
			},
		],
	},
	{
		path: "/Customer/:user/:access_token",
		name: "Customer",
		component: () => import("../components/Customer/Component.vue"),
		children: [
			{
				path: "/Customer/:user/:access_token/HomePage/",
				name: "HomePage",
				component: () => import("../components/Customer/HomePage.vue"),
			},
			{
				path: "/Customer/:user/:access_token/DetailProduct/:book",
				name: "DetailProduct",
				component: () =>
					import("../components/Customer/DetailProduct.vue"),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
