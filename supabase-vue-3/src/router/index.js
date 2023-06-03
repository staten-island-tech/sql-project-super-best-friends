import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "games",
      component: () => import("../views/Home.vue"),
    },

    {
      path: "/GameCard",
      name: "Game Cards",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/sign-in",
      name: "Sign-In",
      component: () => import("../views/Sign-In.vue"),
    },
    {
      path: "/helloworld",
      name: "Hello World",
      component: () => import("../views/HelloWorld.vue"),
    },
  ],
});

export default router;
