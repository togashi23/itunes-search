// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import * as filters from './util/filters';

import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(solid, brands);

Vue.config.productionTip = false;

// フィルタ
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
