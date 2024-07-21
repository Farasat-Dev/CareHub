<script>
import AddAppointmentForm from "../../../components/Dashboard/AddAppointmentForm.vue";
import Modal from "../../../components/Modal.vue";
const AddAppointment = {
  setup() {},
  components: {
    AddAppointmentForm,
    Modal,
  },
};

export default AddAppointment;
</script>
<template>
  <Modal title="Add New Appointment">
    <AddAppointmentForm />
  </Modal>
</template>
