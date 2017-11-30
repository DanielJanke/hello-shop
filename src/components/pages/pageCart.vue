<template>
<div class="grid-container">
  <h1 class="textCenter">Warenkorb</h1>
  <p>{{ store.state.status.visible }}</p>
</div>
</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'
import flickity from 'vue-flickity'
import store from '.././store/index.js'

export default {
  name: 'pageCart',
  components: {
    productBox: productBox,
    flickity: flickity
  },
  data () {
    return {

    }
  },
  created: function () {
    console.log('Cart');
  }
}

</script>

<style>

</style>
