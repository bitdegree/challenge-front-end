import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/",    name: "Home",   component: Home },
  { path: "/post/:slug",    name: "Post",  component: Post },
  { path: "/create",    name: "Create",  component: Create },
  { path: "/edit/:slug",    name: "Edit",   component: Edit }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
