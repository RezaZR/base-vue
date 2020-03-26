import Vue from "vue";

import Router from "vue-router";

import Home from "ROOT/views/home/index";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home_index",
      component: Home
    },
    {
      path: "/suspect_tracking",
      name: "suspect_tracking_index",
      component: () => import("ROOT/views/suspect_trackings/index")
    },
    {
      path: "/crowd_density",
      name: "crowd_density_index",
      component: () => import("ROOT/views/crowd_densities/index")
    }
  ]
});

export default router;
