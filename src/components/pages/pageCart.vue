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
    <div style="background-color: #222; color: white;" class="small-12 medium-5 medium-offset-1 cell">
      <div class="grid-container box">
        <h2 class="textCenter">WOHIN SOLLEN WIR LIEFERN?</h2>
        <div class="grid-x grid-margin-x">
          <div class="small-12 cell">
            <label>Name
              <input type="text" placeholder="Name">
            </label>
          </div>
          <div class="small-12 cell">
            <label>Straße und Hausnummer
              <input type="text" placeholder="Name">
            </label>
          </div>
          <div class="small-6 cell">
            <label>Postleitzahl
              <input type="text" placeholder="Postleitzahl">
            </label>
          </div>
          <div class="small-6 cell">
            <label>Stadt
              <input type="text" placeholder="Berlin">
            </label>
          </div>
          <div class="small-12 cell margin-bottom-1">
            <fieldset>
              <label for="checkbox1">Ich bestätige hiermit die Nutzungbedingungen und die AGB.</label><input id="checkbox1" type="checkbox">
            </fieldset>
          </div>
          <div class="small-12 cell">
            <a class="button button--primary" href="#">Kostenpflichtig bestellen</a>
          </div>
        </div>
      </div>
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
