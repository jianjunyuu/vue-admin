import Vue from 'vue';
import Vuex from 'vuex';
import createPlugin from './plugins';
// import {default as defaultLang, LANG_EN, LANG_ZH_CN, LANG_ZH_HK} from '@/i18n/lang.def';
import {formatterToRouteTree} from '@/router/utils';
// import {logout} from '@/utils/auth';
// import {recursionSort} from '@/utils/quickSort';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		// token: '',
		// isCollapse: false,
		routeTree: [],
		permissions: {}, // 前端权限表
		// user: null,
		// currency: {},
		// includeRouteNames: [],
	},
	getters: {
		menus: (state) => {
			const h = function (routes = []) {
				return routes.map(route => {
					let {name, meta: {node = {}}, children = []} = route;
					return {
						title: node['title'],
						icon: node['icon'],
						index: name,
						children: h(children)
					};
				});
			};

			return h(state.routeTree);
		},
	},
	mutations: {
		// setIncludeRouteName(state, routeName) {
		// 	if (state.includeRouteNames.length > 5) {
		// 		state.includeRouteNames.shift();
		// 	}
		// 	state.includeRouteNames.push(routeName);
		// },
		// setToken(state, token) {
		// 	state.token = token;
		// },
		// setLanguage(state, language) {
		// 	state.language = language && language !== 'undefined' ? language : defaultLang;
		// },
		// setUser(state, user) {
		// 	state.user = user;
		// },
		// setCollapse(state, bool = false) {
		// 	state.isCollapse = bool;
		// },
		setRouteTree(state, menus) {
			const access = {};
			state.routeTree = formatterToRouteTree(menus, null, access);
			state.permissions = access;
		},
		// setCurrency(state, currency) {
		// 	state.currency = currency;
		// },
		// logout() {
		// 	// logout();
		// }
	},
	actions: {},
	modules: {},
	plugins: [createPlugin()] // 数据持久化处理
});
//
// export function autoGetTitle(lang, menu) {
// 	let data = menu && menu['data'];
// 	if (!data) return '';
// 	let {title_cht, title_chs, title_en} = data;
// 	switch (lang) {
// 		case LANG_ZH_HK:
// 			return title_cht; // 目前是没有繁体的
// 		case LANG_ZH_CN:
// 			return title_chs;
// 		case LANG_EN:
// 			return title_en;
// 		default:
// 			return title_en;
// 	}
// }
