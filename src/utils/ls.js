/*
* localStorage 封装统一方法
* */

// export const LS_KEY_TOKEN = 'token';
// export const LS_KEY_LANG = 'lang';
// export const LS_KEY_USER = 'user';
export const LS_KEY_MENUS = 'menus';

/*
* key: String
* value: String
* */
export const setValue = function setValue(key, value) {
	localStorage.setItem(key, value);
};

/*
* 获取token
* */
// export const getToken = function setToken() {
// 	return Cookies.get(LS_KEY_TOKEN);
// };

/*
* 设置token
* */
// 默认一天后
// const expiresDay = new Date(Date.now() + 1000 * 60 * 60 * 24);
// export const setToken = function setToken(token, attributes = {expires: expiresDay}) {
// 	Cookies.set(LS_KEY_TOKEN, token, attributes);
// };

// export const removeToken = function removeToken(attributes = {path: ''}) {
// 	Cookies.remove(LS_KEY_TOKEN, attributes); // removed!
// };

/*
* key: String
* return: String
* */
export const getValue = function getValue(key) {
	return localStorage.getItem(key);
};

export default {
	setValue, getValue
};
