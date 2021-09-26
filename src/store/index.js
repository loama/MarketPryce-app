import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      loaded: false
    },
    user: null
  },
  mutations: {
    loaded(state) {
      state.app.loaded = true
    },
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
    }
  },
  actions: {},
  modules: {}
})
