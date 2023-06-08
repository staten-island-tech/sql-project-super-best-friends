import { defineStore } from "pinia";
import { supabase } from "../supabase.js";

export const AuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      currentUser: null,
    };
  },
  actions: {
    loadUser(user) {
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
