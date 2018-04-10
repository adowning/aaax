import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import { AuthRouter, AuthFilter } from './components/amplify'
import { Auth, Logger } from 'aws-amplify'
Vue.use(VueRouter)
var mode = 'history'

function requireAuth(to, from, next) {
  // logger.debug('before routing ', to, from)
  Auth.currentAuthenticatedUser()
    .then(user => {
      return next()
    })
    .catch(err => {
      AmplifyStore.commit('setUser', null)
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    })
}

const routes = [
  {
    path: '/layout',
    component: () => import('@/components/Layout2'),
    beforeEnter: requireAuth,
    children: [
      {
        path: '/profile',
        component: () => import('@/components/Profile2')
      },
      {
        path: '/hardware',
        component: () => import('@/components/old/Hardware')
      },
      {
        path: '/consumables',
        component: () => import('@/components/old/Consumables')
      },
      {
        path: '/liveview',
        component: () => import('@/components/old/LiveView')
      },
      {
        path: '/schedule',
        component: () => import('@/components/old/Schedule')
      },
      {
        path: '/directory',
        component: () => import('@/components/old/Directory')
      },
      {
        path: '/documents',
        component: () => import('@/components/old/Documents')
      },
      {
        path: '/application',
        component: () => import('@/components/People/applicationStepper')
      }
    ]
  },
  AuthRouter,
  {
    // Always leave this as last one
    path: '/',
    component: () => import('@/components/amplify/components/auth/SignIn')
  },
  {
    // Always leave this as last one
    path: '*',
    component: () => import('@/components/404')
  }
]

const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  mode: mode
})

export default Router
