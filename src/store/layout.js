import { createStore } from "vuex";
export default {
  namespaced: true,
  state: {
    modal: false,
    toggle: false,
  },

  mutations: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },

  actions: {
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },
    toggle({ commit }) {
      commit("toggle");
    },
  },

  getters: {
    modalState: (state) => state.modal,
    toggle: (state) => state.toggle,
  },
};
