import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6845a0e6 = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _69c4596c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _bbbfed5c = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _31e5f546 = () => interopDefault(import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _341bb135 = () => interopDefault(import('../pages/course/_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _46dc912e = () => interopDefault(import('../pages/teacher/_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _01763033 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _6845a0e6,
    name: "course"
  }, {
    path: "/login",
    component: _69c4596c,
    name: "login"
  }, {
    path: "/register",
    component: _bbbfed5c,
    name: "register"
  }, {
    path: "/teacher",
    component: _31e5f546,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _341bb135,
    name: "course-id"
  }, {
    path: "/teacher/:id",
    component: _46dc912e,
    name: "teacher-id"
  }, {
    path: "/",
    component: _01763033,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
