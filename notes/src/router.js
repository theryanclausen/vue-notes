import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Add from './views/Add'
import About from './views/About'
import Edit from './views/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/note/:id',
      name:'edit',
      component: Edit
    }
  ]
})
