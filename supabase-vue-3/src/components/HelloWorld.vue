<template>
  <h1>Games</h1>
</template>
<script setup>
import { ref } from "vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";

async function getGames() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
  );
  const reponse_content = await res.json();
  console.log(reponse_content);
}
getGames();
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
