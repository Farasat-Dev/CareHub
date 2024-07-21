import { get, post } from "../http/axios";

export async function getAppointments(state) {
  try {
    const response = await get("/Appointments");
    state.appointments = response.data;
  } catch (error) {
    console.log("🚀 ~ getAppointments ~ error:", error);
  }
}

export async function createAppointment(values) {
  let appointmentData = {
    appointmentName: values.appointmentName,
    dateOfCheckIn: values.dateOfCheckIn,
    doctorAssigned: values.doctorAssigned,
    disease: values.disease,
    status: values.status,
    roomNo: values.roomNo,
  };
  try {
    const res = await post("/Appointments", appointmentData);
    console.log("🚀 ~ createAppointments ~ res:", res);
    await getAppointments();
  } catch (error) {
    console.log("🚀 ~ getAppointments ~ error:", error);
  }
}
