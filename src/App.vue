<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <errorMessageComponent v-bind:status="status"></errorMessageComponent> -->
    <navigationBarComponent></navigationBarComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import { gateway as MoltinGateway } from '@moltin/sdk'
import navigationBarComponent from './components/navigationBarComponent.vue'
import errorMessageComponent from './components/errorMessageComponent.vue'

export default {
  name: 'app',
  components: {navigationBarComponent: navigationBarComponent},
  data () {
      return {
          test: 'Boo'
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
