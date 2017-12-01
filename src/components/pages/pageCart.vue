<template>
<div class="grid-container">
  <h1 class="textCenter">Warenkorb</h1>
  <!-- <p>{{ store }}</p> -->
  <div class="grid-x grid-margin-x">
    <div class="small-12 medium-6 cell">
      <div v-for="product in cart.data">
        <div class="">
          {{ product.quantity }} x {{ product.name }}
        </div>
        <div class="">
          {{ product.unit_price.amount}} {{ product.unit_price.currency}}
        </div>
        <div class="">
          {{ product.value.amount }} {{ product.unit_price.currency}}
        </div>
        <hr>
      </div>
      <hr>
      <div class="">
        {{ cart.meta.display_price.with_tax.formatted }}
      </div>
    </div>
    <div class="small-12 medium-6 cell">
      
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'
import flickity from 'vue-flickity'
import store from '@/store/index.js'
import Moltin from '../../services/moltin.js'

export default {
  name: 'pageCart',
  components: {
    productBox: productBox,
    flickity: flickity
  },
  data: function () {
    return {
      cart: {}
    }
  },
  created: function () {
    console.log('Cart');
    console.log(store);
    // console.log(Moltin.Cart.Items());
    Moltin.Cart.Items().then((cart) => {
      console.log('cart:');
      console.log(cart);
      this.cart = cart;
    })
  }
}

</script>

<style>

</style>
