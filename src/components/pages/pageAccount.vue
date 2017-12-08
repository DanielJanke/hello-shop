<template>
  <div class="">
    <h1 class="textCenter margin-top-2">Hey, {{$store.state.user.displayName}}</h1>
    <h2>{{ $store.state.user.uid}}</h2>

    Sa3879PZb4af5NskT0BFrlQU3bH3
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
import firebase from '../../services/firebase.js'

export default {
  name: 'account',
  created: function () {
    console.log('Userdata:');
    console.log(firebase.auth().currentUser);

    // firebase.firestore().collection('userdata').get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(`${doc.id} => ${doc.data()}`);
    //     console.log(doc.data());
    //     // console.log(doc.data());
    //   });
    // });
    // console.log(firebase.firestore().collection('userdata').get().then(
    //   (doc) => {
    //     console.log(doc);
    //     doc.forEach((doc) => { console.log(doc.data()) });
    //   }
    // ));
    // console.log(firebase.firestore().collection('userdata').doc(store.state.user.uid).collection('adresses').get().then(
    console.log(firebase.firestore().collection('userdata').doc(store.state.user.uid).collection('adresses').get().then(
      (doc) => {
        doc.forEach((doc) => { console.log(doc.data()) });
      }
    ));

    // Redirect if not logged in
    if (store.state.user === null) {
      store.state.status.visible = 'true';
      store.state.status.type = 'orange';
      store.state.status.message = 'Du musst eingeloggt sein, um diese Seite zu sehen';
      this.$router.replace('warenkorb');
      console.log('not logged in');
    }
    console.log('Account created');
    console.log(store.state.user);
  }
}
</script>
