import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  stateTest: 'Live works',
  products: {

  },
  status: {
    visible: true,
    message: 'gallo',
    type: 'green'
  }
}

export default new Vuex.Store({
  state
  // getters,
  // actions,
  // mutations
})
