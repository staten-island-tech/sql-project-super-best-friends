<script async setup>
import { ref, watch } from "vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");
<<<<<<< HEAD
let response_content = ref("");

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating-`
  );
  console.log(res.url);
  response_content.value = await res.json();
=======
let reponse_content = ref("");

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
  );

  reponse_content.value = await res.json();
>>>>>>> 40a61150b195d1022c83c689113392294c4e9641
}
getGames(page);
function Jump() {
  if (page.value >= 10) {
    document.querySelector(".foward").disabled = true;
  } else if (page.value <= 10) {
    page.value++;
    getGames(page);
  }
  document.querySelector(".foward").disabled = false;
  return page.value;
}
function Fall() {
  if (page.value <= 1) {
    document.querySelector(".backward").disabled = true;
  } else if (page.value >= 2) {
    page.value--;
    getGames(page);
  }
  document.querySelector(".backward").disabled = false;

  return page.value;
}
</script>

<template>
<<<<<<< HEAD
  <h3 v-for="response in response_content.results" :key="name">
    {{ response.name }}
  </h3>
  <GameCard></GameCard>
=======
  <h3 v-for="reponse in reponse_content.results" :key="name">
    {{ reponse.name }}
  </h3>
>>>>>>> 40a61150b195d1022c83c689113392294c4e9641
  <button class="backward" @click="Fall">◀️</button>
  <button class="foward" @click="Jump">▶️</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
