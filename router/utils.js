const FilesPath = require('./generator/filePaths');

export function rf(menus) {
	const access = {};
	const m1 = formatter(menus, null, access);
	return {menusTree: f1(m1), access};
}

function f1(menus = []) {
	return menus.map(function (menu) {
		return {
			...menu,
			props: true,
			meta: {
				// 利用这个可以只做面包屑
				node: menu,
				// 利用这个可以让非菜单节点也可以让菜单处于active状态
				menuItemIndex: menu.data.is_menu === 1 ? resolvePath(menu) : resolvePath(menu.parentNode),
			},
			path: resolvePath(menu),
			component: resolveComponent(menu),
			redirect: resolveRedirect(menu),
			children: f1(menu.children, false)
		};
	});
}

export function formatter(menus = [], parentNode = null, access = {}) {
	return menus.map(function (menu) {
		const node = {
			data: menu,
			parentNode: parentNode,
			name: menu.name,
			path: menu.path,
			children: [],
		};
		if (menu.children && menu.children.length > 0) {
			node.children = formatter(menu.children, node, access);
		}
		access[menu.name] = node;
		return node;
	});
}

function resolvePath(menu) {
	let path = '';
	let curr = menu;
	while (curr) {
		path = '/' + curr.path.replace(/^\//, '') + path;
		if (path === '') return '';
		curr = curr.parentNode;
	}
	return path;
}

function resolveRedirect(menu) {
	let {children} = menu;
	let index = children.findIndex(m => m['data']['is_menu'] === 1);
	return index === -1 ? null : {name: children[index].name};
}

function resolveComponent(menu) {
	return FilesPath[menu.name] ?
		() => import(`@/views${FilesPath[menu.name]}`)
		: null;
}
