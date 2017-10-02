<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <errorMessageComponent v-bind:status="$store.state.status"></errorMessageComponent>
    <navigationBarComponent></navigationBarComponent>
    <router-view></router-view>
    {{test}}
    <br>
    {{$store.state.stateTest}}
    lala

  </div>
</template>

<script>
import { gateway as MoltinGateway } from '@moltin/sdk'
import navigationBarComponent from './components/navigationBarComponent.vue'
import errorMessageComponent from './components/errorMessageComponent.vue'
import store from './store/index.js'

export default {
  name: 'app',
  components: {
    navigationBarComponent: navigationBarComponent,
    errorMessageComponent: errorMessageComponent
  },
  data () {
      return {
          test: 'This is a store test value'
          // status: {
          //   visible: true,
          //   message: 'lala',
          //   type: 'green'
          // }
      }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;
  min-height: 100vh;
  /*margin-top: 60px;*/
  padding: 0;
  background-color: #0D0D0D;
}
</style>
