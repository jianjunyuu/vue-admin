import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/reset.css';
import './components/element-ui';
import '@/router/permission';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
