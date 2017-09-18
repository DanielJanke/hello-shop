<template>
  <div class="product">
    <h1>{{ msg }}</h1>
    <p>Produkt: {{ $route.params.slug }}</p>
    <p>Produkt: {{ this.currentProduct.data[0].id }}</p>
    <p>Preis: {{ this.products.data[0].price[0].amount }}€</p>
  </div>
</template>

<script>
import { gateway as MoltinGateway } from '@moltin/sdk'
export default {
  name: 'Product',
  data () {
    return {
      msg: 'Product',
      id: '0',
      products: {},
      currentProduct: {}
    }
  },
  watch: {
    '$route' (to, from) {
      let self = this;
      self.initial();
    }
  },
  methods: {
    initial: function () {
      console.log('Start');
      console.log(this.$route);

      const Moltin = MoltinGateway({
        client_id: '4Eyi0mI9p39ttLnSi1BkRkzcxTRtT7zNNNHlEAcDbM'
      });

      const products = Moltin.Products.All().then((moltinProducts) => {
        this.products = moltinProducts;
        for (var i = 0; i < moltinProducts.data.length ; i++) {
          if (moltinProducts.data[i].slug.toLowerCase() == this.$route.params.slug.toLowerCase()) {
            console.log('Found:');
            this.currentProduct = moltinProducts.data[i];
          }
          else {
            this.currentProduct = {};
          }
        }
      });
    }
  },
  created: function () {
    let self = this;
    self.initial();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
