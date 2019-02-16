import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// require('whatwg-fetch');

const store = () => new Vuex.Store({

  state: {
    title: '',
  },

  mutations: {
    setSearch: function (state, params) {
      state.title = params;
    }
  },
  actions: {
  }

})

export default store