
<template>
  <router-link :to="{ path: 'Product/coke', params: {} }">
    <div class="productBox">
      <div class="productBox__image">
        <img src="../assets/coke.png" alt="">
      </div>
      <div class="productBox__infos">
        <h4>Coca Cola</h4>
        <p>0,5 Liter</p>
        <div class="productBox__price">
          <p><b>2,99€</b> + 0,25€ Pfand</p>
          <p>2,00€ / Liter</p>
        </div>
        <a class="button button--secondary button--secondary--black">Einkaufen</a>
      </div>
    </div>
  </router-link>
</template>


<script>
import store from '.././store/index.js'
import { gateway as MoltinGateway } from '@moltin/sdk'

export default {
  name: 'productBox',
  data () {
    return {
      errorMessage: 'Error:'
    }
  },
  store: store,
  created: function () {
    console.log('errorMessage created');
    console.log('Moltin' + MoltinGateway);
  },
  methods: {
    close: function () {
      store.state.status.visible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
