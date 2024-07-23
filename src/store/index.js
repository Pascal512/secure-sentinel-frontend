// src/store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    modeSombre: true
  },
  mutations: {
    toggleModeSombre(state) {
      state.modeSombre = !state.modeSombre;
    },
    setModeSombre(state, value) {
      state.modeSombre = value;
    }
  },
  actions: {
    toggleModeSombre({ commit }) {
      commit('toggleModeSombre');
    },
    setModeSombre({ commit }, value) {
      commit('setModeSombre', value);
    }
  },
  getters: {
    isModeSombre: state => state.modeSombre
  }
});
