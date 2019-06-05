import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Model from './views/Model.vue'

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
      component: () => import('./views/Data.vue')
    },
    {
      path: '/model',
      component: Model,
      children: [{
        path: 'detail/:id',
        component: () => import('./views/ModelDetail.vue')
      },{
        path: 'browse',
        component: () => import('./views/ModelBrowse.vue')
      },
      {
        path: 'uploadmodel',
        component: () => import('./views/ModelUpload.vue')
      }, {
        path: 'attach',
        component: () => import('./views/Attach.vue')
      }] 
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('./views/Cloud.vue'),
      children: [{
        path: 'overview',
        component: () => import('./views/CloudOverview.vue')
      },{
        path: 'container',
        component: () => import('./views/CloudContainer.vue')
      },{
        path: 'image',
        component: () => import('./views/CloudImage.vue')
      }]
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
