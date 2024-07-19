<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Icon } from "@iconify/vue";
export default   {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    const { state, dispatch } = useStore();
    let modalState = computed(() => state.isModalOpen);
    const closeModal = () => {
      dispatch("closeModal");
    };
    return {
      modalState,
      closeModal,
    };
  },
  components: {
    Icon,
  },
};
</script>
<template>
  <div
    v-if="modalState"
    class="h-full flex justify-center items-center z-[999] overflow-auto w-full absolute top-0 left-0 backdrop-blur-sm"
  >
    <div
      class="text-center w-[60%] max-h-[100%] bg-secondary rounded-lg border-[1px] border-slate-700 shadow-sm shadow-primary"
    >
      <div class="flex justify-end pe-10 pt-4">
        <Icon
          @click="closeModal"
          icon="material-symbols:close"
          class="text-white text-2xl hover:bg-primary rounded-sm"
        />
      </div>
      <div>
        <h1 class="text-white mt-5 text-2xl">{{ title }}</h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
