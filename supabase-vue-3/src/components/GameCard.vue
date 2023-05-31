<template>
  <div class="card">
    <p>{{ Game.name }}</p>
    <img :src="Game.background_image" :alt="Game.name" />
    <h2 @click="Like" class="unliked">♥</h2>
  </div>
</template>

<script>
import { ref, watch } from "vue";
let id = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
export default {
  name: "Card",
  props: {
    Game: Object,
    title: String,
    summary: String,
    picture: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
}
.card {
  background-color: blanchedalmond;
  padding: 0;
  width: 25%;
  height: 10%;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
}

.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
