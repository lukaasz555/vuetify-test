// Composables
import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/TheUsers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.addRoute("users", {
  path: "/users/:id",
  name: "User",
  component: () => import("../views/TheUser.vue"),
});

export default router;
