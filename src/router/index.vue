<script>
import { createRouter, createWebHistory } from "vue-router";
import Patient from "../pages/admin/patient/Patient.vue";
import Appointment from "../pages/admin/appointment/Appointment.vue";
import dashboardVue from "../pages/admin/dashboard.vue";
import Doctors from "../pages/admin/doctor/Doctors.vue";
import Staff from "../pages/admin/staff/Staff.vue";
import Departments from "../pages/hospital/departments/index.vue";
import Reviews from "../pages/other/Reviews.vue";
import PrivacyPolicy from "../pages/other/PrivacyPolicy.vue";
import TermsCondition from "../pages/other/TermsCondition.vue";

const routes = [
  { path: "/", component: dashboardVue },
  { path: "/admin/patients", component: Patient },
  { path: "/admin/doctors", component: Doctors },
  { path: "/admin/appointments", component: Appointment },
  { path: "/admin/staff", component: Staff },
  { path: "/admin/departments", component: Departments },
  { path: "/health/reviews", component: Reviews },
  { path: "/health/privacy", component: PrivacyPolicy },
  { path: "/health/terms", component: TermsCondition },
];
const router = createRouterInstance();
export default router;
function createRouterInstance() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
</script>
