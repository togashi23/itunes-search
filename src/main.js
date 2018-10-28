// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store/index';
import App from './App';
import router from './router';
import * as filters from './util/filters';

// Font Awesome
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';

Vue.config.productionTip = false;

// フィルタ
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
