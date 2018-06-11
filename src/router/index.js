import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/views/Top';
import Album from '@/views/Album';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: 'itunes',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/album/:id(\\d+)',
      name: 'Album',
      component: Album
    }
  ]
});
