<template>
  <transition name="slideLeft">
    <div v-if="$store.state.cart.cartIsOpen" class="cartComponent">
      <div class="textCenter">
        <p class="text_right" @click="$store.commit('toggleCart')">X</p>
        <h2 class="textCenter">WARENKORB</h2>
        <hr>
        <div v-for="product in $store.state.cart.cartContent.data" class="">
          <p class="text_left"><span>{{ product.quantity }} x </span> <span>{{ product.name }}</span></p><p class="text_right">{{product.value.amount}} {{product.value.currency}}</p>

          <hr>
        </div>
        <router-link :to="{ name: 'pageCart', params: {} }"><a @click="$store.commit('toggleCart')" class="button button--primary position-bottom" href="#">Zur Kasse</a></router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import store from '@/store/index.js'

export default {
  name: 'cartComponent',
  updated: function () {
    console.log('add to cart is opened');
    console.log(store.state.cart.cartIsOpen);
  }
}
</script>
