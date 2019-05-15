import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data',
      name: 'data',
      component: () => import(/* webpackChunkName: "about" */ './views/Data.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import(/* webpackChunkName: "about" */ './views/Model.vue')
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import(/* webpackChunkName: "about" */ './views/Cloud.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
