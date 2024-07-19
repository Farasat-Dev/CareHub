import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.vue";
import store from "../src/store.vue";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
