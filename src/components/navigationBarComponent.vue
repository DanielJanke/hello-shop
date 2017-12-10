<template>
  <div v-bind:class="{notificationActive: $store.state.status.visible}" class="navigationBar">
    <nav>
      <div class="grid-container bar">
        <div class="grid-x grid-margin-x">
          <div class="small-6 medium-4 cell">
            <router-link :to="{ name: 'pageHome', params: {} }"><img width="130px" src="../assets/logo-white.png" alt=""></router-link>
          </div>
          <!-- <div class="small-3 medium-2 cell">
            <router-link :to="{ name: 'account', params: {} }">Mein Account</router-link>
          </div> -->

          <div @click="$store.commit('toggleCart')" class="small-3 medium-2 cell">
            <!-- <span>Warenkorb</span> -->
            <i class="navigationBar__cart material-icons">shopping_cart</i>
          </div>

          <div class="small-3 medium-2 cell">
            <div @click="$store.commit('toggleMenu')" class="toggle">
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
            </div>
          </div>
          <div @click="$store.dispatch('logStore')" class="">
            <!-- <span>DEV: log Store</span> -->
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
