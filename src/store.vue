<script>
import { createStore } from "vuex";

export default createStore({
  state: {
    isModalOpen: false,
    toggle: false,
  },

  mutations: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
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
    isModalOpen: (state) => state.isModalOpen,
    toggle: (state) => state.toggle,
  },
});
</script>
