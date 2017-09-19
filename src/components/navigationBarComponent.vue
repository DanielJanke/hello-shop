<template>
  <div class="bar">
    NavBar
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
<style scoped>
.bar {
  width: 100%;
  height: 4rem;
  color: white;
  background-color: #1A1A1A;
}
</style>
