<script>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { DeleteModal } from "../../components/patients/DeleteModal.vue";
import { useStore } from "vuex";
export default {
  components: {
    Icon,
    DeleteModal,
  },

  setup() {
    const { dispatch } = useStore();
    const openModal = () => {
      dispatch("openModal");
    };
    return {
      openModal,
    };
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    render() {
      console.log(this.data);
    },
  },
};
</script>
<template>
  <div class="block w-full mt-10 border border-gray-600 rounded-lg">
    <table class="items-center w-full bg-transparent">
      <thead>
        <tr>
          <th
            v-for="(item, index) in headers"
            :key="index"
            :class="`table-header ${
              index === 0 || index === 5 ? 'rounded-t-lg' : ''
            }`"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr v-if="data?.length === 0">
          <td colspan="12">
            <div
              class="text-center p-5 text-primary text-lg font-bold uppercase"
            >
              data not found !
            </div>
          </td>
        </tr>
        <tr class="text-gray-300" v-for="(item, index) in data" :key="index">
          <th class="table-data">
            {{ item.dateOfCheckIn }}
          </th>
          <td class="table-data">
            {{ item.patientName }}
          </td>
          <td class="table-data">
            {{ item.doctorAssigned }}
          </td>
          <td class="table-data">
            {{ item.disease }}
          </td>
          <td class="table-data">
            {{ item.status }}
          </td>
          <td class="table-data">
            {{ item.roomNo }}
          </td>
          <td class="table-data">
            <div class="flex gap-2">
              <Icon
                icon="material-symbols:edit-square-outline"
                class="text-secondary-400 cursor-pointer"
                @click="openModal"
              />
              <Icon
                icon="material-symbols:delete-outline"
                class="text-red-700 cursor-pointer"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <DeleteModal />
  </div>
</template>
