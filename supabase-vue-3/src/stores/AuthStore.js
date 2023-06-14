import { defineStore } from "pinia";

export const AuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      currentUser: null,
      userEmail: null,
    };
  },
  actions: {
    loadUser(user) {
      this.currentUser = user;
    },
    clearUser() {
      this.currentUser = null;
    },
    loadEmail(email) {
      this.userEmail = email;
    },
  },

  getters: {
    isAuthenticated() {
      return this.currentUser;
    },
  },
});
