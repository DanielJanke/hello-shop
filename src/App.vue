<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <errorMessageComponent v-bind:status="$store.state.status"></errorMessageComponent>
    <navigationBarComponent></navigationBarComponent>
    <router-view style="margin-top: 4rem;"></router-view>
    <!-- {{test}}
    <br>
    {{$store.state.stateTest}}
    {{$store.state.products}} -->
  </div>
</template>

<script>
// import { gateway as MoltinGateway } from '@moltin/sdk'

import navigationBarComponent from './components/navigationBarComponent.vue'
import errorMessageComponent from './components/errorMessageComponent.vue'
// import pageHome from './components/pageHome.vue'
// import productBox from './components/productBox.vue'

import store from './store/index.js'
import Moltin from './services/moltin.js'

export default {
  name: 'app',
  components: {
    navigationBarComponent: navigationBarComponent,
    errorMessageComponent: errorMessageComponent
  },
  data () {
    return {
      test: 'This is a store test value'
    }
  },
  created () {
    // console.log(store.state.products)
    // console.log('a is: ' + this.a)
    // const Moltin = MoltinGateway({
    //   client_id: '4Eyi0mI9p39ttLnSi1BkRkzcxTRtT7zNNNHlEAcDbM'
    // })
    Moltin.Products.All().then((products) => {
      store.state.products = products;
      // console.log(products);
      // console.log(store.state.products);
    })
  }
}
</script>

<style lang="scss">

@import '~.././src/assets/scss/main.scss';

body {
  margin: 0;

  font-family: 'Roboto Condensed', sans-serif !important;
  font-weight: 400;

}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  color: white;
  min-height: 100vh;
  padding: 0;

}
</style>
