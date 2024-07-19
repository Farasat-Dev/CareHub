<script>
import { Icon } from "@iconify/vue";
import { mdsData } from "../../data";
export default {
  name: "StatsCard",
  components: {
    Icon,
  },
  data() {
    return {
      data: mdsData,
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="bg-secondary p-5 flex flex-col gap-1 rounded border-[1px] border-slate-700 shadow w-full h-[10rem]"
    >
      <div class="flex items-center gap-2">
        <span class="bg-primary text-white rounded-full p-2">
          <Icon :icon="'material-symbols:' + item.icon" class="w-5 h-5" />
        </span>
        <h2 class="text-white font-semibold">{{ item.name }}</h2>
      </div>
      <div class="flex gap-2 items-center divide-x-2">
        <h5 class="text-2xl font-semibold text-white">{{ item.value }}</h5>
        <div class="ps-2 flex flex-col gap-1 w-full">
          <div
            v-for="(subItem, index) in item.types"
            :key="index"
            class="flex gap-2 text-slate-400 items-center "
          >
            <!-- <Icon :icon="'material-symbols:' + subItem.typeIcon" class="text-white text-lg" /> -->
            <Icon :icon="subItem.typeIcon" class="text-primary-light text-lg" />
            <div class="flex items-center justify-between w-full" >
              <span class="text-sm"> {{ subItem.name }} </span>
              <span class="text-sm text-white font-semibold "> {{ subItem.value }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
