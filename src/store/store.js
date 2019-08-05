import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    updateItems (state, data) {
      state.items = data;
    }
  },
   getters: {
    getItems: state => {
      return state.items.slice(0, 6);
    }
  }
})

export default store;

