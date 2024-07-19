<script>
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
            {{ item?.dateOfJoining }}
          </th>
          <td class="table-data">
            {{ item?.doctorName }}
          </td>
          <td class="table-data">
            {{ item?.specialization }}
          </td>
          <td class="table-data">
            {{ item?.schedule }}
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
