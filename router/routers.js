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
		name: 'Permission',
		path: '/permission',
		icon: 'el-icon-s-home',
		title_en: 'Permission',
		title_chs: '权限管理',
		title_cht: '權限管理',
		is_menu: 1,
		children: [
			{
				name: 'Menu',
				path: 'menu',
				icon: 'el-icon-s-home',
				title_en: 'Menu',
				title_chs: '菜单管理',
				title_cht: '菜單管理',
				is_menu: 1,
				children: [

				],
			},
			{
				name: 'User',
				path: 'user',
				icon: 'el-icon-s-home',
				title_en: 'User',
				title_chs: '用户管理',
				title_cht: '用戶管理',
				is_menu: 1,
				children: [

				],
			},
			{
				name: 'Role',
				path: 'role',
				icon: 'el-icon-s-home',
				title_en: 'Role',
				title_chs: '角色管理',
				title_cht: '角色管理',
				is_menu: 1,
				children: [

				],
			},
		],
	},
];
