<template>
  <div class="">
    <h1 class="textCenter margin-top-2">Dein Account: <br> {{$store.state.user.email}}</h1>
    <ul>
      <li>Akuelle Bestellung</li>
      <li>Deine Bestellungen</li>
      <li>Deine Adressen</li>
      <li>Einstellungen</li>
      <ul>
        <li>Emailadresse ändern</li>
        <li>Passwort ändern</li>
        <li>Account löschen</li>
      </ul>
    </ul>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
  name: 'account',
  created: function () {
    console.log('Account created');
    console.log(store.state.user);
  }
}
</script>
