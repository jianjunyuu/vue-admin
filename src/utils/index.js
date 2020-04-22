/**
 * 深拷贝(并不完善，不可枚举、Date类型待完善) 后续考虑使用loadsh的深度拷贝
 * @param <object | array> copyTar
 * @return <object | array> copyRes
 * */
export function deepCopy(aObject) {
	if (aObject === undefined || aObject === null) {
		return aObject;
	}
	var bObject, v, k;
	bObject = Array.isArray(aObject) ? [] : {};
	for (k in aObject) { // 无法遍历出不可枚举属性
		v = aObject[k];
		bObject[k] = (typeof v === 'object') ? deepCopy(v) : v;
	}
	return bObject;
}

export function deepClone(target, ...clones) {
	if (clones.length === 0) return target;
	let toString = Object.prototype.toString;
	clones.forEach(clone => {
		if (toString.call(clone) === '[object Object]') { /* Object */
			if (!target) {
				target = {};
			}
			for (let i in clone) {
				if (typeof clone[i] === 'object') {
					target[i] = deepClone(target[i], clone[i]);
				} else {
					target[i] = clone[i];
				}
			}
		} else if (toString.call(clone) === '[object Array]') { /* Array */
			if (!target) {
				target = [];
			}
			clone.forEach((item, index) => {
				if (typeof item === 'object') {
					target[index] = deepClone(target[index], item);
				} else {
					target[index] = item;
				}
			});
		}
	});
	return target;
}

/**
 * 数组转树形结构
 * @param data
 * @param key
 * @param parentKey
 * @param childrenKey
 * @returns {Array}
 */
export function arrayToTree(data = [], key = 'id', parentKey = 'pid', childrenKey = 'children') {
	let hash = {};
	let noFound = {};
	let tree = [];

	data.forEach(n => {
		let id = n[key];
		let pid = n[parentKey];
		n[childrenKey] = [];
		// eslint-disable-next-line no-prototype-builtins
		if (hash.hasOwnProperty(parentKey)) {
			hash[pid][childrenKey].push(n);
		} else {
			noFound[id] = n;
		}
		hash[id] = n;
	});

	Object.values(noFound).forEach(n => {
		let pid = n[parentKey];
		// eslint-disable-next-line no-prototype-builtins
		if (hash.hasOwnProperty(pid)) {
			hash[pid][childrenKey].push(n);
		} else {
			tree.push(n);
		}
	});

	return tree;
}

// 防抖函数
export function debounce(fun = () => {
}, delay = 300) {
	return function (args) {
		let that = this;
		let _args = args;
		clearTimeout(fun.id);
		fun.id = setTimeout(function () {
			fun.call(that, _args);
		}, delay);
	};
}

export const download = function download(url = '') {
	let elink = document.createElement('a');
	let index = url.lastIndexOf('.');
	let fileType = url.slice(index + 1);
	let fileName = Date.now().toString();
	elink.download = `${fileName}.${fileType}`;
	elink.style.display = 'none';
	elink.href = url;
	document.body.appendChild(elink);
	elink.click();
	document.body.removeChild(elink);
};

export function createResolve() {
	let _resolve;
	let _reject;
	return {
		// Promise 声明时
		promise: new Promise((resolve, reject) => {
			_resolve = resolve;
			_reject = reject;
		}),
		resolve: _resolve,
		reject: _reject,
	};
}
