import { defineStore } from "pinia";
import { supabase } from "../supabase.js";

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
    async LoadedLike() {
      const { data, error } = await supabase.from("like_system").select();
      if (data) {
        data.forEach((el) => {
          this.Like.push(el.id);
          // document.getElementById(el.id).Unliked.value = true;
        });

        console.log(data);
      }
    },
    Liking() {
      Unliked.value = !Unliked.value;
    },
  },
});
