import "./assets/main.css";

import "mulmocast-viewer/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { createHead } from "@unhead/vue/client";

import i18nConf from "./i18n/index";
const i18n = createI18n(i18nConf);
const head = createHead();

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(head);

app.mount("#app");
