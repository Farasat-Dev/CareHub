<script setup>
import axios from "axios";
import { Field, Form, ErrorMessage } from "vee-validate";
import { onMounted } from "vue";
import * as yup from "yup";
import { createPatient } from "../../api/patients.vue";

const schema = yup.object({
  patientName: yup.string().required(),
  dateOfCheckIn: yup.string().min(6).required(),
  doctorAssigned: yup.string().required(),
  disease: yup.string().required(),
  status: yup.string().required(),
  roomNo: yup.number().required(),
});

function onSubmit(values) {
  createPatient(values);
}

onMounted(async () => {
   onSubmit();
});
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="grid grid-cols-2 px-6 gap-4 mt-5">
      <div class="flex flex-col justify-start items-start">
        <label for="patientName" class="label">Patient Name</label>
        <Field
          name="patientName"
          placeholder="Enter patient name"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="patientName" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="dateOfCheckIn" class="label">Date Of Check In  </label>
        <Field
          name="dateOfCheckIn"
          placeholder="Enter date"
          type="date"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="dateOfCheckIn" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="doctorAssigned" class="label">Doctor Assigned</label>
        <Field
          name="doctorAssigned"
          placeholder=" Enter doctor "
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="doctorAssigned" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="disease" class="label">Disease</label>
        <Field
          name="disease"
          placeholder="Enter disease"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="disease" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="status" class="label">status</label>
        <Field
          name="status"
          placeholder="Enter status"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="status" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="roomNo" class="label">Room No</label>
        <Field
          name="roomNo"
          placeholder="Enter room"
          type="number"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="roomNo" class="text-primary" />
      </div>
    </div>
    <div class="py-5">
      <button class="btn-primary" type="submit">Submit</button>
    </div>
  </Form>
</template>
