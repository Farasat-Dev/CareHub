import LayoutStore from "./layout.js";
import PatientsStore from "./patients.js";
import DoctorsStore from "./doctors.js";
import { createStore } from "vuex";

export default createStore({
  modules: {
    layout: LayoutStore,
    patients: PatientsStore,
    doctors: DoctorsStore,
  },
});
