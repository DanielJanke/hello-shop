// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { gateway as MoltinGateway } from '@moltin/sdk';
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
