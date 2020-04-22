import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import EUI from 'element-ui';
import {IMenu, ITableList} from 'vue-element-components';

Vue
    .use(EUI)
    .use(IMenu)
    .use(ITableList);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
