import {
	// getValue,
	LS_KEY_MENUS,
	setValue
} from '@/utils/ls';

export default function createPlugin() {
	return async store => {
		// Token
		// store.commit('setToken', getToken());

		// Language
		// store.commit('setLanguage', getValue(LS_KEY_LANG));

		// User
		// let userJsonString = getValue(LS_KEY_USER);
		// let user = userJsonString ? JSON.parse(userJsonString) : null;
		// store.commit('setUser', user);

		// Menus
		// Mock
		store.commit('setRouteTree', require('../router/routers').default);
		// store.commit('setRouteTree', JSON.parse(getValue(LS_KEY_MENUS) || '[]'));

		// Currency
		// store.commit('setCurrency', JSON.parse(getValue(LS_KEY_CURRENCY) || '{}'));

		// 订阅每次mutation，给特定几个数据做持久化处理
		store.subscribe(mutation => {
			let {type, payload} = mutation;
			switch (type) {
				case 'setToken':
					// setToken(payload);
					break;
				// case 'setLanguage':
				// 	setValue(LS_KEY_LANG, payload);
				// 	break;
				// case 'setUser':
				// 	setValue(LS_KEY_USER, JSON.stringify(payload));
				// 	break;
				case 'setRouteTree':
					setValue(LS_KEY_MENUS, JSON.stringify(payload));
					break;
				// case 'setCurrency':
				// 	setValue(LS_KEY_CURRENCY, JSON.stringify(payload));
				// 	break;
			}
		});
	};
}
