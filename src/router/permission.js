import router from '@/router';
import AppHistory from './appHistory';
// import store from '@/store';
// // import {Message} from 'element-ui';
// // import i18n from '@/i18n';
// // import Container from './views/components/layout/Container';
// import redeemTicket, {toLogin} from '@/utils/auth';
// import cachePrePage from './keepAlive';
//
// const whiteList = ['/404', '/405'];
// // function errorHandler(to, from, next) {
// //     if (to.name && !whiteList.includes(to.path)) { // 提示改用户没有相应的路由权限
// //         // eslint-disable-next-line no-console
// //         console.error('Next to router name: ' + to.name, to, from);
// //         Message({
// //             showClose: true,
// // 	        message: i18n.t('error_no_permission'),
// //             type: 'error'
// //         });
// // 	    next(false);
// //     } else {
// //         next();
// //     }
// // }

let appHistory = new AppHistory();
appHistory.addBackListener(function () {
	console.log('back!!!');
});
appHistory.addPushListener(function () {
	console.log('forward!!!')
});

// 浏览器前进后退都可触发这个回调
// router.back

router.beforeEach(async (to, from, next) => {
	appHistory.watch(to.fullPath);
	next();
	// 如何判断是前进还是后退
	// cachePrePage(store, from);
	// await redeemTicket(store, next); // 验证Ticket，并换取用户信息和token
	// if (store.state.token) { // 判断是否有token, 是否登陆标识
	// 	next();
	//     /**
	//      * 权限验证
	//      */
	//     // if (store.state.access[to.name]) { // pass
	//     //     next();
	//     // } else {
	//     //     errorHandler(to, from, next);
	//     // }
	// } else {
	//     if (whiteList.includes(to.path)) { // 在免登录白名单，直接进入
	//       next();
	//     } else {
	//         // 否则全部重定向到登录页
	// 		toLogin();
	//     }
	// }
});
