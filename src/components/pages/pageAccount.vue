<template>
  <div class="">
    <h1 class="textCenter">Dein Account</h1>
    <ul>
      <li>Akuelle Bestellung</li>
      <li>Deine Bestellungen</li>
      <li>Deine Adressen</li>
      <li>Einstellungen</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'account',
  created: function () {
    console.log('Account created');
  }
}
</script>
