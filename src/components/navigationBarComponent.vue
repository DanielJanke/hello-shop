<template>
  <div v-bind:class="{notificationActive: $store.state.status.visible}" class="navigationBar">
    <div class="grid-container bar">
      <router-link :to="{ name: 'pageHome', params: {} }"><img width="130px" src="../assets/logo-white.png" alt=""></router-link>
      <router-link :to="{ name: 'pageHome', params: {} }">Home</router-link>
      <router-link :to="{ name: 'pageCart', params: {} }">Cart</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  name: 'navigationBarComponent',
  props: ['orderOnWay', 'categories', 'withoutHeaderBelow'],
  data () {
    return {

    }
  },
  created: function () {
    console.log('Nac');
    console.log(store.state.status.visible);
  }
}
</script>
