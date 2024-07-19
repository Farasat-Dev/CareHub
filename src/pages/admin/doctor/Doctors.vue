<script>
import { computed, ref } from "vue";
import { Doctors } from "../../../data/index";
import Table from "./table.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import axios from "axios";

export default {
  name: "patient",
  components: {
    Table,
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
      Doctors,
    };
  },

  setup() {
    // const doctorsData = ref([]);
    const { state, dispatch } = useStore();

    const toggle = computed(() => state.toggle);

    const { doctors, getDoctors } = computed(() => state.doctors);

    console.log("🚀 ~ setup ~ doctors:", doctors);

    const toggleFunction = () => {
      dispatch("toggle");
    };

    // const getDoctors = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:5000/v1/api/doctors"
    //     );

    //     doctorsData.value = response.data;
    //     console.log("🚀 ~ getDoctors ~ doctorsData:", doctorsData.value);
    //   } catch (error) {
    //     console.log("🚀 ~ getPatients ~ error:", error);
    //   }
    // };

    onMounted(async () => {
      await getDoctors();
    });

    return {
      toggle,
      toggleFunction,
      doctors,
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
    <Table :data="doctors" :headers="headers" />
  </div>
</template>
