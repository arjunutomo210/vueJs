import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DailyTask from '../components/pages/DailyTask/DailyTask.vue';
import UserManagement from '../components/pages/UserManagement/UserManagement.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/book',
		name: 'Book',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../components/pages/Book/ListBook.vue')
	},
	{
		path: '/dailytask',
		name: 'DailyTask',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: DailyTask
	},
	{
		path: '/usermanagement',
		name: 'UserManagement',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: UserManagement
	}
];

const router = new VueRouter({
	routes
});

export default router;
