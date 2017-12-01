<template>
  <div class="">
    <div class="header header--gradient2 header--small">
      <div class="grid-container">
        <!-- <header> -->
          <div class="grid-x grid-margin-x align-items_center">
            <div class="small-12 medium-4 cell">
              <img width="100px" src="../assets/coke.png" alt="">
            </div>
            <div class="small-12 medium-8 cell textCenter">
              <h1 class=" ">{{ this.currentProduct.name }}</h1>
              <p class="small-12 cell textCenter">Den Klassiker gibt es auch bei uns zu kaufen.</p>
              <a v-on:click="addToCart" class="button button--secondary">In den Warenkorb</a>
            </div>

            <!-- <div class="auto cell"></div> -->
            <div class="small-12 medium-4 textCenter cell">
              <!-- <a class="button button--primary" href="">In den Warenkorb</a> -->

            </div>
          </div>
        <!-- </header> -->
      </div>
    </div>
    <div class="grid-container">
      <h1>{{ msg }}</h1>
      <p>Produkt: {{ this.$route.params.slug }}</p>

      <p v-if="Object.keys(this.currentProduct).length !== 0 && this.currentProduct.constructor === Object">Produkt: {{ this.currentProduct.id }}</p>
      <p v-if="Object.keys(this.currentProduct).length !== 0 && this.currentProduct.constructor === Object">Preis: {{ this.currentProduct.price[0].amount}}€</p>
      <button v-on:click="addToCart" type="button" name="button">Add to cart</button>
      <button v-on:click="deleteCart" type="button" name="button">Empty Cart</button>
      <button v-on:click="toOrder" type="button" name="button">Convert to Order</button>
      <button v-on:click="pay" type="button" name="button">Pay</button>
      <br>
      <br>
      <br>
      <p>{{this.cart}}</p>
      {{$store.state.stateTest}}
    </div>
  </div>
</template>

<script>
import { gateway as MoltinGateway } from '@moltin/sdk'
import errorMessageComponent from './errorMessageComponent.vue'
import store from '.././store/index.js'

var Moltin = MoltinGateway({
  client_id: '4Eyi0mI9p39ttLnSi1BkRkzcxTRtT7zNNNHlEAcDbM'
})
export default {
  name: 'Product',
  components: {errorMessageComponent: errorMessageComponent},
  data () {
    return {
      msg: 'Product',
      id: '0',
      products: {},
      currentProduct: {},
      cart: {},
      order: {},
      status: {
        visible: true,
        message: 'lala',
        type: 'green'
      }
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

      Moltin.Cart.Items().then((cart) => {
        this.cart = cart;
      })

      Moltin.Products.All().then((moltinProducts) => {
        this.products = moltinProducts;
        console.log(moltinProducts);
        for (var i = 0; i < moltinProducts.data.length; i++) {
          if (moltinProducts.data[i].slug.toLowerCase() === this.$route.params.slug.toLowerCase()) {
            console.log('Found:');
            this.currentProduct = moltinProducts.data[i];
            console.log(this.currentProduct);
          }
        }
        if (Object.keys(this.currentProduct).length === 0 && this.currentProduct.constructor === Object) {
          // this.$router.replace('/404');
          console.log('Product not Found');
        }
      })
    },
    addToCart: function () {
      Moltin.Cart.AddProduct(this.currentProduct.id, 1).then((item) => {
        console.log(`Added ${item.data[0].name} to your cart`);
        Moltin.Cart.Items().then((cart) => {
          this.cart = cart;
        })
      })
      store.state.status.visible = 'true';
      store.state.status.type = 'green';
      store.state.status.message = 'Erfolgreich hinzugefügt';
    },
    deleteCart: function () {
      Moltin.Cart.Delete().then(() => {
        console.log('Deleted Cart');
        Moltin.Cart.Items().then((cart) => {
          this.cart = cart;
        })
      })
      store.state.status.visible = 'true';
      store.state.status.type = 'orange';
    },
    toOrder: function () {
      Moltin.Cart.Checkout({
        customer: {
          name: 'John Doe',
          email: 'john@doe.co'
        },
        billing_address: {
          first_name: 'John',
          last_name: 'Doe',
          line_1: '123 Sunny Street',
          line_2: 'Sunnycreek',
          county: 'California',
          postcode: 'CA94040',
          country: 'US'
        },
        shipping_address: {
          first_name: 'Jon',
          last_name: 'Doe',
          line_1: '123 Sunny Street',
          line_2: 'Sunnycreek',
          county: 'California',
          postcode: 'CA94040',
          country: 'US'
        }
      }).then((message) => {
        console.log(message);
        this.order = message;
        console.log(this.order.data.id);
      })
    },
    pay: function () {
      console.log(this.order.data.id);
      Moltin.Orders.Payment(this.order.data.id, {
        gateway: 'stripe',
        method: 'purchase',
        first_name: 'John',
        last_name: 'Doe',
        number: '4242424242424242',
        month: '02',
        year: '2020',
        verification_value: '123'
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
<style>
</style>
