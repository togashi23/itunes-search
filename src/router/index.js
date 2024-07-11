import Vue from 'vue/dist/vue.esm';
import Router from 'vue-router';
import Top from '@/views/Top.vue';
import Album from '@/views/Album.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: 'itunes',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/album/:id(\\d+)',
      name: 'Album',
      component: Album,
    },
  ],
});
