<script>
import { get, post } from "../http/axios";

export const getDoctors = async (state) => {
  try {
    const response = await get("/doctors");
    state.doctors = response.data;
    console.log("🚀 ~ getDoctors ~ doctorsData:", doctorsData.value);
  } catch (error) {
    console.log("🚀 ~ getPatients ~ error:", error);
  }
};

export async function createDoctor(values) {
  let doctorData = {
    doctorName: values.doctorName,
    dateOfJoining: values.dateOfJoining,
    specialization: values.specialization,
    schedule: values.schedule,
    status: values.status,
    contact: values.contact,
  };
  try {
    const res = await post("/Doctors", doctorData);
    console.log("🚀 ~ createDoctors ~ res:", res);
    await getDoctors();
  } catch (error) {
    console.log("🚀 ~ getDoctors ~ error:", error);
  }
}
</script>
