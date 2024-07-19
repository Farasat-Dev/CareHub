<script>
import { get, post } from "../http/axios";

export async function getPatients(patientsData) {
  try {
    const response = await get("/patients");
    patientsData.value = response.data;
    console.log("🚀 ~ getPatients ~ patientsData:", patientsData.value);
  } catch (error) {
    console.log("🚀 ~ getPatients ~ error:", error);
  }
}

export async function createPatient(values) {
  let patientData = {
    patientName: values.patientName,
    dateOfCheckIn: values.dateOfCheckIn,
    doctorAssigned: values.doctorAssigned,
    disease: values.disease,
    status: values.status,
    roomNo: values.roomNo,
  };
  try {
    const res = await post("/patients", patientData);
    console.log("🚀 ~ createPatients ~ res:", res);
    await getPatients();
  } catch (error) {
    console.log("🚀 ~ getPatients ~ error:", error);
  }
}
</script>
