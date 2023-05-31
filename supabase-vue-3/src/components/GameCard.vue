<template>
<<<<<<< HEAD
  <div @click="" class="card">
    <img
      src="https://www.highsnobiety.com/static-assets/thumbor/SslAH-OYIgo6IxpwzVf8Mto0CBI=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/09/20171839/fortnite-balenciaga-collaboration-release-info-feat.jpg"
      alt="URMA"
    />
=======
  <div class="card">
<<<<<<< HEAD
    <img {{ picture }} />
>>>>>>> 40a61150b195d1022c83c689113392294c4e9641
    <p>{{ title }}</p>
    <p>{{ summary }}</p>
=======
    <p>{{ Game.name }}</p>
    <img :src="Game.background_image" :alt="Game.name" />
    <h2 @click="Like" class="unliked">♥</h2>
>>>>>>> 8b9f34075a9c0e4632ccade0d3991f1cb83e1f2f
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
<<<<<<< HEAD
    id: Number,
  },
  methods: {
    Sum: async function (id) {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&&page_size=100&platforms=18%2C1%2C7&ordering=rating`
      );
      reponse_content.value = await res.json();
      console.log(reponse_content.value.description);
    },
=======
    picture: String,
>>>>>>> 40a61150b195d1022c83c689113392294c4e9641
  },
  methods: {
    Like: function (event) {
      if (event.target.classList.contains("unliked")) {
        event.target.classList.remove("unliked");
        event.target.classList.add("liked");
      } else {
        event.target.classList.remove("liked");
        event.target.classList.add("unliked");
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card {
  background-color: rgb(83, 80, 80);
  color: white;
  width: 23vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
}
.liked {
  color: red;
}
.unliked {
  color: white;
}
.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
