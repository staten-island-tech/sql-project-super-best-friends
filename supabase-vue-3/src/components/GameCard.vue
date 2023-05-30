<template>
  <div class="card">
    <p>{{ Game.name }}</p>
    <img :src="Game.background_image" :alt="Game.name" />
    <h2 @click="Like" class="unliked">♥</h2>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    Game: Object,
    title: String,
    summary: String,
    picture: String,
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
