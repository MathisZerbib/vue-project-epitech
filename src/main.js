import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { BIconPencilSquare, BIconTrash } from "bootstrap-icons-vue";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.component("BIconPencilSquare", BIconPencilSquare);
app.component("BIconTrash", BIconTrash);

app.use(router);

app.mount("#app");
