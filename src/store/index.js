import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  moltin: {},
  stateTest: 'Live works',
  products: {

  },
  status: {
    visible: true,
    message: 'gallo',
    type: 'green'
  }
}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})
