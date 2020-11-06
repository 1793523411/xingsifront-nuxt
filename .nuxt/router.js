import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd4d5ace = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _24ec5c0e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _78d76e1a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _79db201a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _52c8f3d2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _d4eb0e48 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _60a56367 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _78e709f6 = () => interopDefault(import('..\\pages\\history' /* webpackChunkName: "" */))
const _783afd20 = () => interopDefault(import('..\\pages\\album' /* webpackChunkName: "" */))
const _24f3ef6c = () => interopDefault(import('..\\pages\\year' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _bd4d5ace,
    children: [{
      path: "",
      component: _24ec5c0e,
      name: "home"
    }, {
      path: "/login",
      component: _78d76e1a,
      name: "login"
    }, {
      path: "/register",
      component: _78d76e1a,
      name: "register"
    }, {
      path: "/profile",
      component: _79db201a,
      name: "profile"
    }, {
      path: "/settings",
      component: _52c8f3d2,
      name: "settings"
    }, {
      path: "/editor",
      component: _d4eb0e48,
      name: "editor"
    }, {
      path: "/article/:id",
      component: _60a56367,
      name: "article"
    }, {
      path: "/history",
      component: _78e709f6,
      name: "history"
    }, {
      path: "/album/:id",
      component: _783afd20,
      name: "album"
    }, {
      path: "/year/:id",
      component: _24f3ef6c,
      name: "year"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
