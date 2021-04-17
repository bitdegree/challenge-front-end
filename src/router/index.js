import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post-page",
    name: "Post-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post-page.vue"),
  },
  {
    path: "/post-creation-page",
    name: "Post-creation-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post-creation-page.vue"),
  },
  {
    path: "/post-creation-page",
    name: "Post-creation-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post-creation-page.vue"),
  },
  {
    path: "/post-edit-page",
    name: "Post-edit-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post-edit-page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
