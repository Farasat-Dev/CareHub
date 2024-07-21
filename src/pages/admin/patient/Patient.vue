<script>
import { patients } from "../../../data/index";
import Table from "./table.vue";
import Modal from "../../../components/Modal.vue";
import { useStore } from "vuex";
import { onMounted, reactive } from "vue";
import { ref } from "vue";
import { getPatients } from "../../../api/patients.vue";
import AddPatient from "../../components/patients/AddModal.vue";
import { useModal } from "../../../utills/useModal";
import AddPatientForm from "../../../components/Dashboard/AddPatientForm.vue";
export default {
  name: "patient",
  components: {
    Table,
    Modal,
    AddPatient,
    AddPatientForm,
  },
  data() {
    return {
      headers: [
        "Date of Check in",
        "Patient Name",
        "Doctor Assigned",
        "Disease",
        "Status",
        "Room No",
        "Actions",
      ],
      patients,
    };
  },
  setup() {
    const patientsData = ref([]);
    const state = reactive({
      show: false,
    });
    const { modal, openModal } = useModal();

    // const { dispatch } = useStore();
    // const openModal = () => {
    //   dispatch("openModal");
    // };

    onMounted(async () => {
      await getPatients(patientsData);
    });

  
    return {
      modal,
      openModal,
      patientsData,
      state,
    };
  },
};
</script>
<template>
  <div>
    <h1 class="text-white font-semibold p-4 text-2xl">All Patients</h1>
    <div class="mt-5 flex justify-between items-center">
      <input type="search" class="rounded bg-secondary" placeholder="search" />
      <!-- <button @click="openModal" class="btn-primary">Add New Patient</button> -->
      <button @click="state.show = !state.show" class="btn-primary">
        Add New Patient
      </button>
    </div>
    <div v-if="state.show" class="text-center">
      <AddPatientForm />
    </div>
    <Table :data="patientsData" :headers="headers" />
    <AddPatient title="Add New Patient" />
  </div>
</template>
