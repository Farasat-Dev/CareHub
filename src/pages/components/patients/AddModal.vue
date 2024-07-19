<script>
import AddPatientForm from "../../../components/Dashboard/AddPatientForm.vue";
import Modal from "../../../components/Modal.vue";
const AddPatient = {
  setup() {},
  components: {
    AddPatientForm,
    Modal,
  },
};

export default AddPatient;
</script>
<template>
  <Modal title="Add New Patient">
    <AddPatientForm />
  </Modal>
</template>
