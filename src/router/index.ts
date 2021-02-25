import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
// import Post2 from "../views/Post2.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
// import PostPage from "../views/PostPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/home", name: "Home", component: Home },
  { path: "/post/:slug", name: "Post", component: Post },
  // { path: "/post2", name: "Post2", component: Post2 },
  { path: "/create", name: "Create", component: Create },
  { path: "/edit/:slug", name: "Edit", component: Edit }
  // { path: "/postpage", name: "PostPage", component: PostPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
