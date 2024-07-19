<script>
import { createStore } from "vuex";
import { get } from "../http/axios";

// fetching doctors and setting data in state


export default createStore({
  state: {
    doctors: [],
  },

  mutations: {
    setDoctors(state, payload) {
      state.doctors = payload;
    },
  },

  actions: {
    async getDoctors({ commit }) {
      try {
        const response = await get("doctors");
        const data = await response.json();
        commit("setDoctors", data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getDoctors: (state) => state.doctors,
  },
});

</script>
