<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import { onMounted } from "vue";
import * as yup from "yup";
import { createDoctor } from "../../../api/doctor.vue";

const schema = yup.object({
  doctorName: yup.string().required(),
  dateOfJoining: yup.string().min(6).required(),
  specialization: yup.string().required(),
  schedule: yup.string().required(),
  contact: yup.string().required(),
  status: yup.string().required(),
});

function onSubmit(values) {
  createDoctor(values);
}

onMounted(async () => {
  onSubmit();

  return {};
});
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="grid grid-cols-2 px-6 gap-4 mt-5">
      <div class="flex flex-col justify-start items-start">
        <label for="doctorName" class="label">doctor Name</label>
        <Field
          name="doctorName"
          placeholder="Enter doctor name"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="doctorName" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="dateOfJoining" class="label">dateOfJoining </label>
        <Field
          name="dateOfJoining"
          placeholder="Enter date"
          type="date"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="dateOfJoining" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="specialization" class="label">specialization</label>
        <Field
          name="specialization"
          placeholder=" Enter doctor "
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="specialization" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="schedule" class="label">schedule</label>
        <Field
          name="schedule"
          placeholder="Enter schedule"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="schedule" class="text-primary" />
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
        <label for="contact" class="label">contact</label>
        <Field
          name="contact"
          placeholder="Enter room"
          type="number"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="contact" class="text-primary" />
      </div>
    </div>
    <div class="py-5">
      <button class="btn-primary" type="submit">Submit</button>
    </div>
  </Form>
</template>



<!-- <script setup>
import { onMounted } from "vue";
import * as yup from "yup";
import { createDoctor } from "../../../api/doctor.vue";

const schema = yup.object({
  doctorName: yup.string().required(),
  dateOfJoining: yup.string().min(6).required(),
  specialization: yup.string().required(),
  schedule: yup.string().required(),
  contact: yup.string().required(),
  status: yup.number().required(),
});

function onSubmit(values) {
  createDoctor(values);
}

onMounted(async () => {
  onSubmit();
});
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="grid grid-cols-2 px-6 gap-4 mt-5">
      <div class="flex flex-col justify-start items-start">
        <label for="doctorName" class="label">doctor Name</label>
        <Field
          name="doctorName"
          placeholder="Enter doctor name"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="doctorName" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="dateOfJoining" class="label">dateOfJoining </label>
        <Field
          name="dateOfJoining"
          placeholder="Enter date"
          type="date"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="dateOfJoining" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="specialization" class="label">specialization</label>
        <Field
          name="specialization"
          placeholder=" Enter doctor "
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="specialization" class="text-primary" />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="schedule" class="label">schedule</label>
        <Field
          name="schedule"
          placeholder="Enter schedule"
          type="text"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="schedule" class="text-primary" />
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
        <label for="contact" class="label">contact</label>
        <Field
          name="contact"
          placeholder="Enter room"
          type="number"
          class="w-full rounded-lg"
        />
        <ErrorMessage name="contact" class="text-primary" />
      </div>
    </div>
    <div class="py-5">
      <button class="btn-primary" type="submit">Submit</button>
    </div>
  </Form>
</template> -->
