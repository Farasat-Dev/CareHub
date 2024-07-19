<script>
import { Icon } from "@iconify/vue";
export default {
  name: "AppBar",
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="bg-secondary shadow-lg p-3 flex justify-between">
    <div class="flex gap-3 items-center ps-5">
      <Icon icon="material-symbols:menu-open" class="text-white text-3xl" />
      <Icon
        icon="material-symbols:mark-email-unread"
        class="text-red-500 text-xl"
      />
      <Icon
        icon="material-symbols:notifications-unread"
        class="text-yellow-300 text-xl"
      />
      <Icon icon="material-symbols:translate" class="text-purple-500 text-xl" />
    </div>
    <div class="flex gap-3 items-center">
      <h2 class="text-white font-semibold">John Deo</h2>
      <div class="relative">
        <Icon
          icon="material-symbols:person-pin"
          class="text-2xl text-primary"
        />
        <!-- <span
              class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-primary border-2 border-white dark:border-gray-800 rounded-full"
            ></span> -->
      </div>
      <Icon
        icon="material-symbols:mark-chat-unread"
        class="text-green-300 text-2xl"
      />
    </div>
  </div>
</template>
