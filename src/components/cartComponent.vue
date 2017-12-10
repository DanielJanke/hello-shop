<template>
<div class="">

  <transition name="fadeout">
    <div v-if="$store.state.cart.cartIsOpen" @click="$store.commit('toggleCart')" class="cartComponent__overlayLeft"></div>
  </transition>


  <transition name="slideLeft">
    <div v-if="$store.state.cart.cartIsOpen" class="cartComponent">

      <div class="cartComponent__cart textCenter">
        <p class="text_right" @click="$store.commit('toggleCart')">X</p>
        <h2 class="textCenter">WARENKORB</h2>
        <hr>
        <div style="">


          <div v-for="product in $store.state.cart.cartContent.data">
            <p class="cartComponent__priceRow"><span>{{ product.quantity }} x </span> <span>{{ product.name }}</span>{{product.meta.display_price.with_tax.value.formatted}}</p>
            <hr>
          </div>
        </div>

        <router-link :to="{ name: 'pageCart', params: {} }"><span @click="$store.commit('toggleCart')" class="button button--primary position-bottom">Zur Kasse</span></router-link>
      </div>
    </div>
  </transition>

  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
  name: 'cartComponent',
  updated: function () {
    console.log('add to cart is opened');
    console.log(store.state.cart.cartIsOpen);
    console.log(store.state.cart);
  }
}
</script>
