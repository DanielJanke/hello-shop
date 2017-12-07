<template>
<div class="grid-container">
  <h1 class="textCenter margin-top-1">BESTELLEN</h1>
  <div class="grid-x grid-margin-x">
    <div class="small-12 medium-4 medium-offset-1  margin-bottom-2 cell">
      <div class="grid-container box">
        <h2 class="textCenter">HAST DU EINEN ACCOUNT?</h2>
        <div class="grid-x grid-margin-x">
          <div class="small-12 cell">
            <label>Email
              <input v-model="email" type="text">
            </label>
          </div>
          <div class="small-12 cell">
            <label>Passwort
              <input v-model="password" type="password">
            </label>
          </div>


          <div class="small-12 cell">

            <a @click="authenticate" class="button button--primary margin-bottom-1">Anmelden</a>
            <p>{{ message }}</p>
            <!-- <a class="button button--secondary">Passwort veressen?</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="small-12 medium-4 medium-offset-2  margin-bottom-2 cell">
      <div class="grid-container box">
        <h2 class="textCenter">ALS GAST BESTELLEN</h2>
        <div class="grid-x grid-margin-x">
          <div class="small-12 cell">
            <label>Name
              <input type="text" placeholder="Name">
            </label>
          </div>
          <div class="small-12 cell">
            <label>Straße und Hausnummer
              <input type="text" placeholder="Name">
            </label>
          </div>
          <div class="small-6 cell">
            <label>Postleitzahl
              <input type="text" placeholder="Postleitzahl">
            </label>
          </div>
          <div class="small-6 cell">
            <label>Stadt
              <input type="text" placeholder="Berlin">
            </label>
          </div>
          <div class="small-12 cell">
            <fieldset>
              <label for="checkbox1">Ich bestätige hiermit die Nutzungbedingungen und die AGB.</label><input id="checkbox1" type="checkbox">
            </fieldset>
          </div>
          <div class="small-12 cell margin-bottom-1">
            <fieldset>
              <label for="checkbox2">Meine Rechnungsadresse ist identisch mit meiner Lieferadresse</label><input id="checkbox2" type="checkbox">
            </fieldset>
          </div>
          <div class="small-12 cell ">
            <a class="button button--primary margin-bottom-1" href="#">Kostenpflichtig bestellen</a>
          </div>
        </div>
      </div>
    </div>
    <div class="small-12 medium-4 cell">
      <div class="grid-container box">
        <h2 class="textCenter">REGISTRIEREN</h2>
        <div class="grid-x grid-margin-x">
          <div class="small-12 cell">
            <label>Email
              <input v-model="email" type="email" placeholder="Email">
            </label>
          </div>
          <div class="small-12 cell">
            <label>Passwort
              <input v-model="password" type="password" placeholder="Passwort">
            </label>
          </div>
          <div class="small-12 cell ">
            <a @click="register" class="button button--primary margin-bottom-1">Registrieren</a>
          </div>

          <div class="small-12 cell">
            <p>{{message}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'
// import store from '@/store/index.js'
import Moltin from '../../services/moltin.js'
import firebase from '../../services/firebase.js'

export default {
  name: 'pageCart',
  components: {
    productBox: productBox
  },
  data: function () {
    return {
      cart: {},
      email: '',
      password: '',
      message: 'lala'
    }
  },
  methods: {
    authenticate () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log('user:');
          console.log(user);
          this.$router.replace('home');
          this.message = user;
        },
        (error) => {
          console.log('error');
          console.log(error);
          this.message = error.message;
        }
      )
    },
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user);
        },
        (error) => {
          console.log(error);
          this.message = error.message;
        }
      )
    }
  },
  created: function () {
    Moltin.Cart.Items().then((cart) => {
      this.cart = cart;
    })
  }
}

</script>

<style>

</style>
