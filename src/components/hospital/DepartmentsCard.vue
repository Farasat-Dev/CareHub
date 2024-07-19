<script>
export default {
  name: "departmentCard",
  props: {
    data: {
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
};
</script>
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-sm border-[1px] border-slate-600  h-[30rem]  ">
    <img class="w-full" :src="data?.url" alt="image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl text-white mb-2">{{ data?.title }}</div>
      <p class="text-tertiary text-base">
        {{ data?.description }}
      </p>
    </div>
  </div>
</template>
