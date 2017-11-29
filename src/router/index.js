import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Product from '@/components/Product'
import notFound from '@/components/notFound'
import pageHome from '@/components/pageHome'
import pageCart from '@/components/pages/pageCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'pageHome',
      component: pageHome
    },
    {
      path: '/warenkorb',
      name: 'pageCart',
      component: pageCart
    },
    {
      path: '/Product/:slug',
      name: 'Product',
      component: Product
    },
    {
      path: '/404',
      name: 'notFound',
      component: notFound
    }
  ]
})
