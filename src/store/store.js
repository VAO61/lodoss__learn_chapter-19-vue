import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    myList: [],
    theme: 'result-tile'
  },
  mutations: {
    updateItems(state, data) {
      state.items = data;
    },
    addOrRemoveRepo(state, repo) {
      const isExists = !!state.myList.find(item => item.id === repo.id);
      if (isExists) {
        state.myList = state.myList.filter(item => item.id !== repo.id);
      } else {
        state.myList = [...state.myList, repo];
      }
    },
    // isActive: function(state, value) {
    //   return state.theme === value ? `${state.theme}__btn_active` : '';
    // },
    setTheme: function(state, value) {
      state.theme = value;
    }
  },
  getters: {
    getItems: state => {
      return state.items.slice(0, 6);
    },
    getMyList: state => {
      return state.myList;
    },
    isExistsById: state => id => {
      return !!state.myList.find(item => item.id === id);
    },
    takeTheme: state => state.theme
  }
});

export default store;
