import { defineStore } from "pinia";

export const AuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      currentUser: null,
    };
  },
  actions: {
    async loadUser(user) {
      this.currentUser = user;
    },
    clearUser() {
      this.currentUser = null;
    },
  },

  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    },
  },
});
