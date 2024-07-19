<script>
import { data } from "autoprefixer";
import { reviewsData } from "../../data/index";
export default {
  name: "Reviews",
  data() {
    return {
      data: reviewsData,
    };
  },
};
</script>
<template>
  <div class="grid grid-cols-3 gap-3 px-5 pt-5">
    <div v-for="(item, index) in data" :key="index">
      <Card
        class="bg-secondary flex flex-col rounded-xl justify-center items-center gap-3 w-full p-5"
      >
        <img src="/images/doc3.png" class="h-20 w-20 rounded-full" />
        <div class="text-center">
          <h1 class="text-white font-semibold text-xl">
            {{ item.clientName }}
          </h1>
          <h1 class="text-tertiary text-md">
            {{ item.review }}
          </h1>
          <p class="text-yellow-500 font-bold text-4xl">********</p>
        </div>
      </Card>
    </div>
  </div>
</template>
