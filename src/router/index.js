import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import carousel from '@/views/carousel'
import simple from '@/views/simple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : '/home'
    },
    {
      path : '/home',
      name : 'home',
      component : home
    },
    {
      path : '/carousel',
      name : 'carousel',
      component : carousel
    },
    {
      path: '/simple',
      name : 'simple',
      component : simple
    }
  ]
})
