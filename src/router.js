import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import { AuthRouter, AuthFilter } from './components/amplify'

Vue.use(VueRouter)
var mode = 'history'

// if (process.env.NODE_ENV === 'production') {
//   mode = 'hash'
// }
// const Layout = () => import('@/components/Layout')

const routes = [
  {
    path: '/layout',
    component: () => import('@/components/Layout2'),
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

Router.beforeEach(AuthFilter)
// Router.beforeEach((to, from, next) => {
//   if (to.path !== '/') {
//     if (store.getters.user) {
//       // console.log("There is a user, resume. (" + to.path + ")");
//       next()
//     } else {
//       console.log('There is no user, redirect to login. (' + to.path + ')')
//       next('/')
//     }
//   } else {
//     // console.log("You're on the login page");
//     next() // This is where it should have been
//   }
// })

export default Router
