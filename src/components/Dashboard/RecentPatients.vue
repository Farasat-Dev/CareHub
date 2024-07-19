<script>
import { RecentPatientData } from "../../data";
export default {
  name: "RecentPatients",
  data() {
    return {
      data: RecentPatientData,
    };
  },
};
</script>
<template>
  <Card class="w-full p-3 bg-secondary rounded-lg">
    <h1 class="text-2xl text-white font-semibold mb-7">
      Recent Patients Activity
    </h1>
    <div class="flex flex-col gap-3">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex justify-between px-3 items-center text-tertiary border-b-[1px] py-3 border-slate-500"
      >
        <div class="flex items-center gap-2">
          <Img :src="`${item.image}`" class="w-12 h-12 rounded-full" />
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.age }}</p>
          </div>
        </div>
        <div
          :class="[
            item.status === 'Pending' ? 'text-yellow-400' : '',
            item.status === 'Recover' ? 'text-green-400' : '',
            item.status === 'On Recovery' ? 'text-blue-400' : '',
            item.status === 'Rejected' ? 'text-red-600' : '',
          ]"
        >
          {{ item.status }}
        </div>
      </div>
    </div>
  </Card>
</template>
