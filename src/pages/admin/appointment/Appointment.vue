<script>
import { appointments } from "../../../data/index";
import Table from "./table.vue";
export default {
  name: "patient",
  components: {
    Table,
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
    <Table :data="appointments" :headers="headers" />
  </div>
</template>
