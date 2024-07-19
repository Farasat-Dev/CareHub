<script>
import DepartmentsCard from "../../../components/hospital/DepartmentsCard.vue";
import { departments } from "../../../data/index";
export default {
  name: "departments",
  components: {
    DepartmentsCard,
  },
  data() {
    return {
      data: departments,
    };
  },
};
</script>
<template>
  <div>
    <h1 class="text-white font-semibold p-4 text-2xl">Departments</h1>
    <div class="mt-5 flex justify-between items-center">
      <input type="search" class="rounded bg-secondary" placeholder="search" />
        <button class="btn-primary">Add New Department</button>
    </div>
    <div class="grid grid-cols-3" >
      <div v-for="(item, index) in data" :key="index" class="mt-5">
        <departments-card :data="item" />
      </div>
    </div>
  </div>
</template>
