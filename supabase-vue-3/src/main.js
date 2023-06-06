import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createClient } from "@supabase/supabase-js";
import router from "./router";
createApp(App).mount("#app");
