<template>
  <div v-if="status.visible" :style="{ 'background-color': status.type }" class="error">
    {{status.message}}
  </div>
</template>

<script>

export default {
  name: 'errorMessageComponent',
  props: ['status'],
  data () {
    return {
      errorMessage: 'Error:'
    }
  },
  created: function () {
    console.log('error');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  width: 100%;
  height: 10rem;
  background-color: red;
}
</style>
