<template>
  <div class="grid-container">
    <img src="../assets/logo-white.png" alt="">
    <router-link :to="{ name: 'pageHome', params: {} }">Home</router-link>
    <router-link :to="{ name: 'pageHome', params: {} }">Home</router-link>
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
.bar {
  width: 100%;
  height: 4rem;
  color: white;
  /*background-color: #1A1A1A;*/
}
</style>
