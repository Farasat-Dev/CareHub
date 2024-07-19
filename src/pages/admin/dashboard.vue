<script>
import StatsCard from "../../components/Dashboard/StatsCard.vue";
import UserChart from "../../components/charts/UserChart.vue";
import ColumChart from "../../components/charts/ColumChart.vue";
import BasicChart from "../../components/charts/BasicChart.vue";
import DashAnaylticTable from "../../components/Dashboard/DashAnalyticTable.vue";
import TopRatedDoctors from "../../components/Dashboard/TopRatedDoc.vue";
import TopRatedDoc from "../../components/Dashboard/TopRatedDoc.vue";
import RecentPatients from "../../components/Dashboard/RecentPatients.vue";

export default {
  name: "MainBody",
  components: {
    StatsCard,
    UserChart,
    ColumChart,
    BasicChart,
    DashAnaylticTable,
    TopRatedDoctors,
    TopRatedDoc,
    RecentPatients,
  },
};
</script>

<template>
  <div class="w-full h-screen flex flex-col gap-2">
    <StatsCard />
    <div class="flex w-full justify-center gap-1 h-[30rem]">
      <UserChart />
      <ColumChart />
      <!-- <UserChart /> -->
      <!-- <BasicChart /> -->
    </div>
    <div class="flex gap-2">
      <TopRatedDoc />
      <RecentPatients />
    </div>
    <DashAnaylticTable />
  </div>
</template>
