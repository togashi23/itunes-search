import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/views/Top'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: 'itunes',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    }
  ]
})
