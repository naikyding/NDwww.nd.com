import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Shop from '../views/Shop.vue'
import CheckOut from '../views/CheckOut.vue'
import Admin from '../views/Admin.vue'
import Search from '../views/Search.vue'
// children
import TableSlide from '../components/TableSlide.vue'
import TableEvent from '../components/TableEvent.vue'
import TableProduct from '../components/TableProduct.vue'

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
  // 商品頁面
  {
    path: '/products/:table/:name',
    name: 'products',
    component: Products
  },
  // 類別商品頁面
  {
    path: '/shop/:sex',
    name: 'shop',
    component: Shop
  },
  // 結帳頁面
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  },
  // 搜尋頁面
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  // 後台管理
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '首頁管理',
        name: '首頁管理',
        component: TableSlide
      },
      {
        path: '商品管理',
        name: '商品管理',
        component: TableProduct
      },
      {
        path: '優惠活動',
        name: '優惠活動',
        component: TableEvent
      }
    ]
  },
  // 以上除外都排入 首頁
  {
    path: '*',
    redirect: './'
  }
]

const router = new VueRouter({
  routes
})

export default router
