import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Shop from '../views/Shop.vue'
import CheckOut from '../views/CheckOut.vue'
import Admin from '../views/Admin.vue'
import SlideTable from '../components/TableSlide.vue'
import TableEvent from '../components/TableEvent.vue'

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
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '首頁管理',
        name: '首頁管理',
        component: SlideTable
      },
      {
        path: '優惠活動',
        name: '優惠活動',
        component: TableEvent
      }
    ]
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
