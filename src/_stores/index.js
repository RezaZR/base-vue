import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { suspect_tracking } from "./modules/suspect_tracking";
import { crowd_density } from "./modules/crowd_density";

const debug = process.env.NODE_ENV !== "production";

export const store = new Vuex.Store({
  modules: {
    suspect_tracking,
    crowd_density
  },
  strict: debug
});
