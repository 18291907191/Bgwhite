import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// require('whatwg-fetch');

const store = () => new Vuex.Store({

  state: {
    searchParams: '',
  },

  mutations: {
    setSearch: function (state, params) {
      state.searchParams = params;
    }
  },
  actions: {
  }

})

export default store