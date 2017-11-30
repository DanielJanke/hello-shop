<template>
<div class="grid-container">
  <h1 class="textCenter">Warenkorb</h1>
  <!-- <p>{{ store }}</p> -->
</div>
</template>

<script type="text/javascript">
import { gateway as MoltinGateway } from '@moltin/sdk'
import productBox from '@/components/productBox.vue'
import flickity from 'vue-flickity'
import store from '@/store/index.js'

export default {
  name: 'pageCart',
  components: {
    productBox: productBox,
    flickity: flickity
  },
  created: function () {
    console.log('Cart');
    console.log(store);
    MoltinGateway.Cart.Items().then((cart) => {
      console.log(cart);
    })
  }
}

</script>

<style>

</style>
