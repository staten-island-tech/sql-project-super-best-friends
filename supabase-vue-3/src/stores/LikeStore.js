import { defineStore } from "pinia";
import { ref } from "vue";
export const LikeStore = defineStore("Like", {
  state: () => ({ Like: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    PushLike(id) {
      this.Like.push(id);
    },
  },
});
