import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/detail'
import ComponentVue from '../pages/componentVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
        path: '/componentVue',
        name: 'componentVue',
        component: ComponentVue
      }
  ]
})
