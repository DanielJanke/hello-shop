<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'Product', params: { slug: 'Coke'} }">Hllo</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 2 App',
      product: {}
    }
  }
  // created: function () {
  //   console.log('a is: ' + this.a);
  //   const Moltin = MoltinGateway({
  //     client_id: '4Eyi0mI9p39ttLnSi1BkRkzcxTRtT7zNNNHlEAcDbM'
  //   });
  //   const products = Moltin.Products.All().then((products) => {
  //     console.log(products);
  //   });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
