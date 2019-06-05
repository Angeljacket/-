import Vue from 'vue'
import Router from 'vue-router'
// import all from '@/components/all/index'
import illustration from '@/components/illustration/index'
import comic from '@/components/comic/index'
import draw from '@/components/draw/index'
import photography from '@/components/photography/index'
import sifu from '@/components/sifu/index'
// import dynamic from '@/components/dynamic/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all',
      component: (resolve) => require(['../components/all/index.vue'], resolve)
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: (resolve) => require(['../components/illustration/index.vue'], resolve)
    },
    {
      path: '/comic',
      name: 'comic',
      component: (resolve) => require(['../components/comic/index.vue'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: (resolve) => require(['../components/draw/index.vue'], resolve)
    },
    {
      path: '/photography',
      name: 'photography',
      component: (resolve) => require(['../components/photography/index.vue'], resolve)
    },
    {
      path: '/sifu',
      name: 'sifu',
      component: (resolve) => require(['../components/sifu/index.vue'], resolve)
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: (resolve) => require(['../components/dynamic/index.vue'], resolve)
    }
  ]
})
