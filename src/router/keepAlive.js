const cachePrePage = function cachePrePage(store, from) {
	let {name, meta: {node}} = from;
	if (node) {
		let {data = {}} = node;
		// 当前页面对应路由是菜单节点时候，去除缓存
		if (data.is_menu === 1) {
			store.commit('setIncludeRouteName', name);
		}
	}
};
export default cachePrePage;
