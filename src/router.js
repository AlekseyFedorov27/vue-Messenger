import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/index'
import firebase from 'firebase/app'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: true },//защита роутов
      component: Home
    },
    {
      path: "/dialog/:id",
      name: 'dialog',
      meta: { auth: true },//защита роутов
      component: () => import('./views/Dialog.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },

  ]
})


// router.beforeEach((to, from, next) => {
//   const currentUser = store.state.userUid
//   const requireAuth = to.matched.some(record => record.meta.auth)
//   if (requireAuth && currentUser) {
//     next ('/login')
//   } else { next() }
// })


router.beforeEach((to, from, next) => {
  const currentUser = store.state.auth.userUid
  const requireAuth = to.matched.some(record => record.meta.auth)

  if ( to.matched.some( record => record.meta.auth )) {
    if ( !currentUser) {
      console.log(!currentUser)
      next('/login')
    } else {
      console.log('vhod')
      next()
    }
  } else {
    next()
  }
})
export default router