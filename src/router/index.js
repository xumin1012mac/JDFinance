import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Raise from '@/raise/Raise'
import DownLoad from '@/download/DownLoad'
import "../assets/reset.scss"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/raise',
      name: 'Raise',
      component: Raise
    },{
      path: '/download',
      name: 'DownLoad',
      component: DownLoad
    }
  ]
})
