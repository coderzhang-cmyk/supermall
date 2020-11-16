import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    commodity: []
  },
  mutations,
  actions,
  getters,
  modules: {}
})

export default store