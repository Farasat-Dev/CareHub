<template>
  <div class="w-full h-full flex flex-col">
  <div class="w-full h-full px-1 pt-2">
    <div class="bg-white shadow-lg border p-5 flex justify-between rounded">
      <div class="flex gap-2 items-center text-gray-500">
        <img src="/public/svg/search.svg" class="icon" />
        Search
      </div>
      <div class="flex gap-3 items-center">
        <div class="flex gap-1">
          <img src="/public//svg//mail.svg" class="icon" />
          <img src="/public//svg//bell.svg" class="icon" />
        </div>
        <h2 class="text-primary font-semibold">John Deo</h2>
        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src="/public//adminimage.jpg"
            alt=""
          />
          <span
            class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-primary border-2 border-white dark:border-gray-800 rounded-full"
          ></span>
        </div>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="px-5 flex flex-col gap-5">
    <BreadCrumbs />
    <div class="flex  gap-2">
      <StatsCard />
      <StatsCard />
      <StatsCard />
    </div>
    <div class="flex w-full justify-center  gap-1">
      <UserChart />
      <ColumChart />
      <UserChart />
      <!-- <BasicChart /> -->
    </div>
    <div>
      jellp
    </div>
  </div>
  </div>
</template>
<script>
import BreadCrumbs from "./ui-elements/BreadCrumbs.vue";
import StatsCard from "./Dashboard/StatsCard.vue";
import UserChart from "./charts/UserChart.vue";
import ColumChart from "./charts/ColumChart.vue";
import BasicChart from "./charts/BasicChart.vue";
export default {
  name: "MainBody",
  components: {
    BreadCrumbs,
    StatsCard,
    UserChart,
    ColumChart,
    BasicChart,
  },
};
</script>
