<script>
import { staff } from "../../../data/index";
import Table from "./table.vue";
export default {
  name: "Staff",
  components: {
    Table,
  },
  data() {
    return {
      headers: [
        "Name",
        "Designation",
        "Address",
        "Email",
        "Joining Date",
        "Actions",
      ],
      staff,
    };
  },
};
</script>
<template>
  <div>
    <h1 class="text-white font-semibold p-4 text-2xl">All Staff</h1>
    <div class="mt-5 flex justify-between items-center">
      <input type="search" class="rounded bg-secondary" placeholder="search" />
      <button class="btn-primary">Add New Staff</button>
    </div>
    <Table :data="staff" :headers="headers" />
  </div>
</template>
