import { createRouter, createWebHistory } from "vue-router";
import { AuthStore } from "../stores/AuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        requiresLogin: true,
      },
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

router.beforeEach((to, from, next) => {
  const auth = AuthStore();
  if (
    to.matched.some((record) => record.meta.requiresLogin) &&
    auth.currentUser === null
  ) {
    console.log(":p");
    next("/sign-in");
  } else {
    next();
  }
});
export default router;
