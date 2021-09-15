import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Product from '../pages/Product.vue'
import Merchant from '../pages/Merchant.vue'
import Extra from '../pages/Extra.vue'
import merchantsproducts from '../pages/merchantsproducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/merchant',
    component: Merchant
  },
  {
    path: '/extra',
    component: Extra
  },
  {
    path: '/merchantsproducts',
    component: merchantsproducts
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
