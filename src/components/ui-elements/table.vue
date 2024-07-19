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
            :class="`table-header ${index === 0 || index === 5 ? 'rounded-t-lg' : ''}`"

          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr class="text-gray-300" v-for="(item, index) in data" :key="index">
          <th class="table-data">
            {{ item.checkIn }}
          </th>
          <td class="">
            {{ item.patientName }}
          </td>
          <td class="table-data">
            {{ item.doctorAssigned }}
          </td>
          <td class="table-data">
            {{ item.diseases }}
          </td>
          <td class="table-data">
            {{ item.status }}
          </td>
          <td class="table-data">
            {{ item.roomNo }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
