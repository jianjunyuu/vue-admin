const FilesPath = require('./generator/filePaths');

/** 转成树形到路由格式 */
export function formatterToRouteTree(menus = [], parent = null, access = {}) {
	return menus.map(function (menu) {
		menu.parent = parent;
		access[menu.name] = menu;
		return {
			name: menu.name,
			path: resolvePath(menu),
			component: resolveComponent(menu),
			redirect: resolveRedirect(menu),
			props: true,
			meta: {
				node: menu
			},
			children: menu.children && menu.children.length > 0
				? formatterToRouteTree(menu.children, menu, access)
				: [],
		};
	});
}

function resolvePath(menu) {
	let path = '';
	let curr = menu;
	while (curr) {
		path = '/' + curr.path.replace(/^\//, '') + path;
		if (path === '') return '';
		curr = curr.parent;
	}
	return path;
}

function resolveRedirect(menu) {
	let {children} = menu;
	let index = children.findIndex(m => m['is_menu'] === 1);
	return index === -1 ? null : {name: children[index].name};
}

function resolveComponent(menu) {
	return FilesPath[menu.name] ?
		() => import(`@/views${FilesPath[menu.name]}`)
		: null;
}
