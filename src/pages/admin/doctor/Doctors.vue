<script>
import { Doctors } from "../../../data/index";
import Table from "./table.vue";
import { onMounted, reactive } from "vue";
import { getDoctors } from "../../../api/doctor.vue";
import AddDoctorForm from "../../../components/Dashboard/doctors/AddDoctorForm.vue";
export default {
  name: "doctors",
  components: {
    Table,
    AddDoctorForm,
  },

  data() {
    return {
      headers: [
        "Date of Joining",
        "Doctor Name",
        "Specialization",
        "Schedule",
        "Contact",
        "Status",
      ],
      // Doctors,
    };
  },

  setup() {
    const state = reactive({
      show: false,
      doctors: [],
    });

    onMounted(async () => {
      await getDoctors(state);
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <div>
    <h1 class="text-white font-semibold p-4 text-2xl">All Doctors</h1>
    <div class="mt-5 flex justify-between items-center">
      <input type="search" class="rounded bg-secondary" placeholder="search" />
      <button class="btn-primary">Add New Doctor</button>
    </div>


    <div class="text-center">
      <AddDoctorForm />
    </div>
    <Table :data="state.doctors" :headers="headers" />
  </div>
</template>
