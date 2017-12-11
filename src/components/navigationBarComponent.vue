<template>
  <div v-bind:class="{notificationActive: $store.state.status.visible}" class="navigationBar">
    <nav>
      <div class="grid-container bar">
        <div class="grid-x grid-margin-x">
          <div class="small-6 medium-4 cell">
            <router-link :to="{ name: 'pageHome', params: {} }"><img style="margin-top: 5px;" width="130px" src="../assets/logo-white.png" alt=""></router-link>
          </div>

          <transition name="fadeout">
            <div v-if="$store.state.ui.menu.isOpen" @click="$store.commit('toggleMenu')" class="cartComponent__overlayLeft cartComponent__overlayLeft--menu"></div>
          </transition>

          <transition name="slideLeft">
            <div v-if="$store.state.ui.menu.isOpen" class="cartComponent cartComponent--menu">
              <span class="cartComponent__categoryElement" v-for="category in $store.state.categories.data">{{category.name}}</span>
              <b>___</b>
              <div class="small-3 medium-2 cell">
                <router-link :to="{ name: 'account', params: {} }"><i class="material-icons navigationBar__cart">account_circle</i></router-link>
              </div>
            </div>
          </transition>

          <div class="navigationBar__accountIcon small-3 medium-2 cell">
            <router-link :to="{ name: 'account', params: {} }"><i class="material-icons navigationBar__cart">account_circle</i></router-link>
          </div>


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
          <!-- <div @click="$store.dispatch('logStore')" class="">
            <span>DEV: log Store</span>
          </div> -->

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
