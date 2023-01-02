import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faEnvelope, faGithub, faTelegramPlane);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
