import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/sign-up",
      name: "Sign-Up",
      component: () => import("../views/Sign-Up.vue"),
    },

    {
      path: "/sign-in",
      name: "Sign-In",
      component: () => import("../views/Sign-In.vue"),
    },

    {
      path: "/DesData/:id",
      name: "DesData",
      component: () => import("../views/DesData.vue"),
    },
  ],
});

export default router;
