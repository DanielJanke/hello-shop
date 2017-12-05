<template>
  <div class="grid-container addToCart">
    <div class="grid-x grid-margin-x align-items_center padding-1 ">
      <div class="small-1 cell">
        10,00€
      </div>
      <div class="small-6 cell text_right">
        <a @click="decrease" class="button button--secondary">-</a>
        <input class="textCenter" style="width: 3rem; display: inline; height: 40px; margin: -10px 0 0 0;" type="number" name="" :value="inputValue">
        <a @click="increase" class="button button--secondary">+</a>
      </div>
      <div class="small-4 cell text_right">
        <span @click="$store.dispatch({type: 'addToCart', productId: productId, quantity: inputValue })" class="button button--primary">Kaufen</span>
      </div>
    </div>
  </div>
</template>

<script>
import Moltin from '.././services/moltin.js'

export default {
  name: 'addToCartComponent',
  props: ['productId'],
  data: function () {
    return {
      inputValue: 1
    }
  },
  methods: {
    increase: function () {
      this.inputValue++;
    },
    decrease: function () {
      this.inputValue > 1 && this.inputValue--;
    }
  },
  beforeMount: function () {
    console.log(Moltin);
    console.log('this');
    console.log(this._props.productId);
  }
}
</script>
