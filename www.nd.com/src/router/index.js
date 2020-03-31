import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products/:table/:name',
    name: 'products',
    component: Products
  },
  {
    path: '/shop/:sex',
    name: 'shop',
    component: Shop
  },
  {
    path: '*',
    redirect: './'
  }
]

const router = new VueRouter({
  routes
})

export default router
