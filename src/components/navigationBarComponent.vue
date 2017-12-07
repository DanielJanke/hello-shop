<template>
  <div v-bind:class="{notificationActive: $store.state.status.visible}" class="navigationBar">
    <nav>
      <div class="grid-container bar">
        <div class="grid-x grid-margin-x">
          <div class="small-6 medium-4 cell">
            <router-link :to="{ name: 'pageHome', params: {} }"><img width="130px" src="../assets/logo-white.png" alt=""></router-link>
          </div>
          <div class="small-3 medium-3 cell">
            <router-link :to="{ name: 'pageHome', params: {} }">Home</router-link>
          </div>
          <div @click="$store.commit('toggleCart')" class="small-3 medium-3 cell">
            <!-- <router-link :to="{ name: 'pageCart', params: {} }">Cart</router-link> -->
            <span>Warenkorb</span>
          </div>
          <div @click="$store.dispatch('logStore')" class="">
            <span>DEV: log Store</span>
          </div>
        </div>
      </div>
    </nav>
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
