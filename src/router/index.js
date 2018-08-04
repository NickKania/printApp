import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Machines from '@/components/Machines'
import Admin from '@/components/Admin'
import Report from '@/components/Report'
import NewPrint from '@/components/NewPrint'
import SignIn from '@/components/SignIn'

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
      path: '/newPrint',
      name: 'NewPrint',
      component: NewPrint,
      meta: {
        isAdmin: false
      }
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn,
      meta: {
        isAdmin: false
      }
    }
  ]
})
