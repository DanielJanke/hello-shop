import Vue from 'vue'
import Vuex from 'vuex'
import Moltin from '../services/moltin.js'
import firebase from '../services/firebase.js'

Vue.use(Vuex)

const state = {
  moltin: {},
  stateTest: 'Live works',
  status: {
    visible: false,
    message: 'gallo',
    type: 'green'
  },
  products: {},
  cart: {
    cartIsOpen: false,
    cartContent: {}
  },
  user: {}
}

const actions = {
  // Page loaded
  initial () {
    Moltin.Cart.Items().then((cart) => {
      state.cart.cartContent = cart;
    });
    state.user = firebase.auth().currentUser;
    console.log('state');
    console.log(state);
  },
  addToCart (commit, payload) {
    console.log('payload:');
    console.log(payload);
    Moltin.Cart.AddProduct(payload.productId, payload.quantity).then((item) => {
      console.log(`Added ${item.data[0].name} to your cart`);
      Moltin.Cart.Items().then((cart) => {
        state.cart.cartContent = cart;
      })
    })
  },
  logStore () {
    console.log(state);
  }
}

const mutations = {
  toggleCart () {
    console.log('toggle cart');

    state.cart.cartIsOpen = !state.cart.cartIsOpen;
    console.log(state.cart.cartIsOpen);
  }
}

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})
