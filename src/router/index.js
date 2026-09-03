import { createRouter, createWebHashHistory } from 'vue-router';
import Top from '@/views/Top.vue';
import Album from '@/views/Album.vue';

export default createRouter({
  history: createWebHashHistory(),
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
