import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Machines from '@/components/Machines'
import Admin from '@/components/Admin'
import Report from '@/components/Report'
import Uploads from '@/components/Uploads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/machines',
      name: 'Machines',
      component: Machines
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/uploads/:user',
      name: 'Uploads',
      props: true,
      component: Uploads
    }
  ]
})
