<template>
<div class="">
  <h1>Warenkorb</h1>
</div>
</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'
import flickity from 'vue-flickity'

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
