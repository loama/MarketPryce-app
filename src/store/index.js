import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      loaded: false
    }
  },
  mutations: {
    loaded(state) {
      state.app.loaded = true
    }
  },
  actions: {},
  modules: {}
})
