import Vue from 'vue'
import Router from 'vue-router'
import hotShow from '@/views/hotShow/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hotShow',
      component: hotShow
    }
  ]
})
