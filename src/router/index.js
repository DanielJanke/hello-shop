import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import Product from '@/components/pages/pageProduct'
import notFound from '@/components/notFound'
import pageHome from '@/components/pages/pageHome'
import pageCart from '@/components/pages/pageCart'
import account from '@/components/pages/pageAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: pageHome
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
      path: '/mein-account',
      name: 'account',
      component: account
    },
    {
      path: '/404',
      name: 'notFound',
      component: notFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
