import Vue from 'vue';
import App from './App.vue';
import router from '../router';
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
  router,
  render: h => h(App),
}).$mount('#app')
