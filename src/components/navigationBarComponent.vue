<template>
  <div class="navigationBar navigationWithoutHeader">
    <div class="grid-container bar">
      <router-link :to="{ name: 'pageHome', params: {} }"><img width="130px" src="../assets/logo-white.png" alt=""></router-link>
      <router-link :to="{ name: 'pageHome', params: {} }">Home</router-link>
      <router-link :to="{ name: 'pageCart', params: {} }">Cart</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigationBarComponent',
  props: ['orderOnWay', 'categories'],
  data () {
    return {

    }
  },
  created: function () {
    console.log('Nac');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.navigationBar
{
  background-color: #1A1A1A;
}
.bar {
  height: 4rem;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
</style>
