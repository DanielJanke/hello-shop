<template>
  <div>
    <div v-if="$store.state.user !== null">
      <h1 class="textCenter">1. Adresse</h1>
      <h2>Gespeichert Adressen</h2>
      <h2>Neue Adresse eingeben</h2>
      <p>Nicht Daniel? Ausloggen.</p>
    </div>
  </div>
</template>

<script>
import store from '../../store/index.js'

export default {
  name: 'checkout01',
  created: function () {
    if (store.state.user === null) {
      this.$router.replace('/warenkorb');
    }
    console.log('ch01');
    console.log(store);
  }
}
</script>
