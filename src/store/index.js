import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    stateTest: 'Live works',
    status: {
      visible: false,
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
