<script>
import { DashAnalyticData } from "../../data";
import Table from "../ui-elements/table.vue";
let headers = ["Top Channels", "Users", " Statistics"];

let th =
  "px-4 bg-secondary text-tertiary align-middle py-3 text-xs font-semibold text-left uppercase rounded-t-lg whitespace-nowrap";

export default {
  data() {
    return {
      headers,
      data: DashAnalyticData,
      th,
      Table,
    };
  },
};

const columns = [
  {
    header: "organic search",
    key: "to-channels",
    render: ({ row }) => {
      return row.users;
    },
  },
  {
    header: "Social Media",
    key: "social-media",
    render: ({ row }) => {
      return row.users;
    },
  },
  {
    header: "Email",
    key: "email",
    render: ({ row }) => {
      return row.user;
    },
  },
  {
    header: "Referral",
    key: "referral",
    render: ({ row }) => {
      return row.user;
    },
  },
  {
    header: "Direct",
    key: "email",
    render: ({ row }) => {
      return row.user;
    },
  },
  {
    header: "Other",
    key: "email",
    render: ({ row }) => {
      return row.user;
    },
  },
];
</script>dxf
<template>
  <div class="block w-full mt-10 border border-gray-600 rounded-lg">
    <Table data="columns;" />
    <!-- <table class="items-center w-full bg-transparent">
      <thead>
        <tr>
          <th
            v-for="(item, index) in headers"
            :key="index"
            class="table-header"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr class="text-gray-300" v-for="(item, index) in data" :key="index">
          <th
            class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
          >
            {{ item.name }}
          </th>
          <td
            class="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4"
          >
            {{ item.users }}
          </td>
          <td
            class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2 text-xs font-medium">{{ item.value }}</span>
              <div class="relative w-full">
                <div class="w-full bg-gray-200 rounded-sm h-2">
                  <div
                    :class="`bg-${item.color} h-2 rounded-sm`"
                    style="width: 30%"
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>
