<script>
import Modal from "../../../components/Modal.vue";

export const DeleteModal = {
  setup() {},
  components: {
    Modal,
  },
};
</script>
<template>
  <Modal title="Delete Patient" v-if="isModalOpen" >
    <p>Are you sure you want to delete this patient ?</p>
    <div>
      <button class="btn-primary">Yes</button>
      <button class="btn-secondary">No</button>
    </div>
  </Modal>
</template>
