import { defineStore } from "pinia";
import { ref } from "vue";
export const LikeStore = defineStore("Like", {
  state: () => ({ Like: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    PushLike(id) {
      if (this.Like.includes(id)) {
        this.Like.pop();
        console.log("Already Liked");
      } else {
        this.Like.push(id);
      }
    },
  },
});
