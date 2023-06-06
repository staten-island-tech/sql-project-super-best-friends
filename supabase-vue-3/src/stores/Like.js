import { defineStore } from "pinia";
import { ref } from "vue";
export const LikeStore = defineStore("Like", {
  state: () => ({ Like: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    PushLike() {
      this.Like++;
    },
  },
});
