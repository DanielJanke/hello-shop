<template>
  <div v-bind:class="{notificationActive: $store.state.status.visible}" class="navigationBar">
    <nav>
      <div class="bar">

          <router-link :to="{ name: 'pageHome', params: {} }"><img style="margin-top: 5px;" width="130px" src="../assets/logo-white.png" alt=""></router-link>

          <transition name="fadeout">
            <div v-if="$store.state.ui.menu.isOpen" @click="$store.commit('toggleMenu')" class="cartComponent__overlayLeft cartComponent__overlayLeft--menu"></div>
          </transition>

            <div v-bind:class="{cartComponent__active: $store.state.ui.menu.isOpen}" class="cartComponent cartComponent--menu">
              <span class="cartComponent__categoryElement" v-for="category in $store.state.categories.data">{{category.name}}</span>
              <div class="cartComponent__overlayLeft--menu">
                <b>___</b>
                <div class="small-3 medium-2 cell">
                  <router-link :to="{ name: 'account', params: {} }"><i @click="$store.commit('toggleMenu')" class="material-icons navigationBar__cart">account_circle</i></router-link>
                </div>
              </div>
            </div>

          <div class="navigationBar__accountIcon">
            <router-link :to="{ name: 'account', params: {} }"><i class="material-icons navigationBar__cart">account_circle</i></router-link>
          </div>

          <div @click="$store.commit('toggleCart')">
            <!-- <span>Warenkorb</span> -->
            <i class="navigationBar__cart material-icons">shopping_cart</i>
          </div>


            <div @click="$store.commit('toggleMenu')" class="toggle">
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
              <div v-bind:class="{toggle__bar__active: $store.state.ui.menu.isOpen}" class="toggle__bar"></div>
            </div>
          <!-- <div @click="$store.dispatch('logStore')" class="">
            <span>DEV: log Store</span>
          </div> -->

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
