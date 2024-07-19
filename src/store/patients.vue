<script>
import { createStore } from "vuex";

export default createStore({
  state: {
    patients: [],
  },

  mutations: {
    setPatients(state, payload) {
      state.patients = payload;
    },
  },

  actions: {
    async getPatientsFunction({ commit }) {
      try {
        const response = await get("/patients");
        const data = await response.json();
        commit("setPatients", data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getPatients: (state) => state.patients,
  },

//   getters: {
//     getPatients: (state) => state.patients,
//   },
});
</script>
