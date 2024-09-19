import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store"; // Vuex 스토어 임포트

createApp(App).use(router).use(store).mixin(mixins).mount("#app");
