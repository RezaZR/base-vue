import Vue from "vue";

import router from "ROOT/router";
import { store } from "ROOT/_stores";

import App from "ROOT/App.vue";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
