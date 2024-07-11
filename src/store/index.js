import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';

import search from './modules/search';
import state from './modules/state';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    search,
    state,
  },
  strict: debug,
});
