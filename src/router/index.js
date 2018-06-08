import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Machines from '@/components/Machines'
import Admin from '@/components/Admin'
import Report from '@/components/Report'
import Uploads from '@/components/Uploads'
import NewPrint from '@/components/NewPrint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/machines',
      name: 'Machines',
      component: Machines,
      meta: {
        isAdmin: false
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        isAdmin: true
      }
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
      meta: {
        isAdmin: false
      }
    },
    {
      path: '/uploads/:user',
      name: 'Uploads',
      props: true,
      component: Uploads,
      meta: {
        isAdmin: false
      }
    },
    {
      path: '/newPrint',
      name: 'NewPrint',
      component: NewPrint,
      meta: {
        isAdmin: false
      }
    }
  ]
})
