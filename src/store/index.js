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
  ui: {
    menu: {
      isOpen: true
    }
  },
  user: {},
  categories: {}
}

const getters = {
  // categories: () => {
  //   return state.products.data.;
  // }
}

const actions = {
  // Page loaded
  initial () {
    console.log('App loaded');
    console.log(Moltin);
    Moltin.Cart.Items().then((cart) => {
      state.cart.cartContent = cart;
    });
    Moltin.Categories.Tree().then((cats) => {
      state.categories = cats;
    });

    console.log('FIREBASE AUTH:');
    console.log(firebase.auth().currentUser);
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
    state.cart.cartIsOpen = !state.cart.cartIsOpen;
  },
  toggleMenu () {
    state.ui.menu.isOpen = !state.ui.menu.isOpen;
    console.log(state.ui.menu.isOpen);
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
