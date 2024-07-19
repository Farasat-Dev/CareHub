<script>
import { TopRatedDocData } from "../../data/index";
export default {
  name: "TopRatedDoc",
  data() {
    return {
      data: TopRatedDocData,
    };
  },
};
</script>
<template>
  <div class="bg-secondary rounded-lg p-4 w-full">
    <div class="text-2xl text-white font-semibold mb-7">Top Rated Doctor</div>
    <div class="grid grid-cols-4">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex flex-col justify-center items-center mb-4 gap-2"
      >
        <Img :src="`${item.img}`" class="w-24 h-24 rounded-lg" />
        <div class="text-tertiary text-center flex flex-col gap-1  text-sm">
          <p class="text-white font-semibold">{{ item.name }}</p>
          <p class="">{{ item.speciality }}</p>
          <p class="flex justify-center w-full ">
            <!-- {{ item.rating }} -->
            <span class="text-primary text-[16px]">
              {{ item.stars }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
