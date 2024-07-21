<script>
import { onMounted, reactive } from "vue";
import { appointments } from "../../../data/index";
import Table from "./table.vue";
import { getAppointments } from "../../../api/appointments";
import AddAppointmentFrom from "../../../components/Dashboard/appointment/AddAppointmentFrom.vue";
export default {
  name: "patient",
  components: {
    Table,
    AddAppointmentFrom,
  },

  data() {
    return {
      headers: [
        "Name",
        "Email",
        "Date of Appointment",
        "From",
        "To",
        "Mobile",
        "Consulting",
        "Disease",
      ],
      appointments,
    };
  },

  setup() {
    const state = reactive({
      appointments: [],
    });

    onMounted(async () => {
      await getAppointments(state);
    });

    return {
      state,
    };
  },
};
</script>
<template>
  <div>
    <h1 class="text-white font-semibold p-4 text-2xl">All Appointments</h1>
    <div class="mt-5 flex justify-between items-center">
      <input type="search" class="rounded bg-secondary" placeholder="search" />
      <div class="flex gap-2 items-center">
        <button class="btn-primary">Book Appointment</button>
        <button class="btn-primary">Add New Appointment</button>
      </div>
    </div>
    <AddAppointmentFrom key="addAppointment" />
    <Table :data="state.appointments" :headers="headers" />
  </div>
</template>
