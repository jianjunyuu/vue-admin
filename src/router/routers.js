/*
* 路由定义(树形结构)
* */

export default [
	// {
	// 	name: 'Home',
	// 	path: '/',
	// 	icon: 'el-icon-s-home',
	// 	title_en: 'Home',
	// 	title_chs: '首页',
	// 	title_cht: '首页',
	// 	is_menu: 1,
	// 	children: [],
	// },
	{
		name: 'Widget',
		path: '/widget',
		icon: 'el-icon-s-home',
		title: '组件库',
		is_menu: 1,
		children: [
			{
				name: 'IMenu',
				path: 'menu',
				icon: 'el-icon-s-home',
				title: 'IMenu',
				is_menu: 1,
				children: []
			},
			{
				name: 'ITableList',
				path: 'table-list',
				icon: 'el-icon-s-home',
				title: 'ITableList',
				is_menu: 1,
				children: []
			}
		]
	},
	{
		name: 'Permission',
		path: '/permission',
		icon: 'el-icon-s-home',
		title: '权限管理',
		is_menu: 1,
		children: [
			{
				name: 'Menu',
				path: 'menu',
				icon: 'el-icon-s-home',
				title: '菜单管理',
				is_menu: 1,
				children: [],
			},
			// {
			// 	name: 'User',
			// 	path: 'user',
			// 	icon: 'el-icon-s-home',
			// 	title_en: 'User',
			// 	title_chs: '用户管理',
			// 	title_cht: '用戶管理',
			// 	is_menu: 1,
			// 	children: [
			//
			// 	],
			// },
			{
				name: 'Role',
				path: 'role',
				icon: 'el-icon-s-home',
				title: '角色管理',
				is_menu: 1,
				children: [],
			},
		],
	},
];
