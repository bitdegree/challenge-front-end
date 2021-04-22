import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostPage from "../views/Post-page.vue";
import PostCreationPage from "../views/Post-creation-page";
import PostEditPage from "../views/Post-edit-page";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/post/:id", name: "Post-page", component: PostPage, props: true },
  {
    path: "/post-creation-page",
    name: "Post-creation-page",
    component: PostCreationPage,
  },
  {
    path: "/post-edit-page/:id/edit",
    name: "Post-edit-page",
    component: PostEditPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
