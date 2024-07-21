<script>
import { formatDate } from "../../../utills/helpers/dateFormat";

export default {
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
      console.log("test", data);
    },
  },
  setup() {
    return {
      formatDate,
    };
  },
};
</script>
<template>
  <div
    class="block w-full mt-10 border border-gray-600 rounded-lg overflow-auto"
  >
    <table class="items-center w-full bg-transparent ovverflow-auto">
      <thead>
        <tr>
          <th
            v-for="(item, index) in headers"
            :key="index"
            :class="`table-header `"
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
            {{ formatDate(item?.dateOfJoining) }}
          </th>
          <td class="table-data">
            {{ item?.doctorName }}
          </td>
          <td class="table-data">
            {{ item?.specialization }}
          </td>
          <td class="table-data">
            {{ formatDate(item?.schedule) }}
          </td>
          <td class="table-data">
            {{ item?.contact }}
          </td>
          <td class="table-data">
            {{ item?.status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
