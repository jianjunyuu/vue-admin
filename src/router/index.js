import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/components/layout/Layout';
import store from '@/store';
// import NotFound from '../views/error-page/404';
// import NotAllowed from '../views/error-page/405';

Vue.use(Router);

export const addRoutes = function addRoutes() {
	let routes = bubbleSort(
		routesDataCreator(store.state.routeTree || [])
	);
	if (routes.length > 0) {
		router.addRoutes([
			{
				path: '/',
				component: Layout,
				redirect: {name: routes[0]['name']},
				children: routes,
			},
		]);
	}
};

function routesDataCreator(tree = []) {
	let _routers = [];
	tree.forEach(item => {
		_routers.push({
			...item,
			children: [],
		});
		_routers = _routers.concat(flat(item.children));
	});
	return _routers;
}

/**
 * 树形结构扁平化
 * @param {Array} arr 一般是子路由（children）
 */
function flat(arr) {
	let children = [];
	arr.forEach(obj => {
		if (obj.children.length === 0) {
			children.push(obj);
		} else {
			children = [...children, ...flat(obj.children)];
			children.push(Object.assign({}, obj, {children: []}));
		}
	});
	return children;
}

function bubbleSort(arr) {
	const result = [];
	arr.forEach(function (route) {
		const matched = route.path.match(/:[^/]+$/);
		if (matched) {
			result.push(route);
		} else {
			result.unshift(route);
		}
	});
	return result;
}

const router = new Router({
	mode: 'hash',
	routes: [
		// {
		// 	path: '/405',
		// 	component: NotAllowed,
		// },
		// {path: '*', component: NotFound}
	],
});
addRoutes();
export default router;
