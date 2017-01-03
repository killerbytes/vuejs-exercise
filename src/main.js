// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Project from './views/Project'
import Home from './views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/projects/:id', name: 'project', component: Project },
    { path: '/', redirect: '/home' }

  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
