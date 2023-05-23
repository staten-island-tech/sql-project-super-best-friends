<script async setup>
import { ref, watch } from "vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
  );
  const reponse_content = await res.json();
  console.log(reponse_content);
  return reponse_content;
}

let gameData = ref("");
gameData.value = await getGames(page);
function Jump() {
  page.value++;

  return page.value;
}
function Fall() {
  if (page.value <= 1) {
    document.querySelector(".backward").disabled = true;
  } else if (page.value >= 2) {
    page.value--;
    console.log("poop");
  }
  document.querySelector(".backward").disabled = false;

  return page.value;
}
watch(page, (currentValue) => {
  getGames(Number(currentValue));
});
</script>

<template>
  <h1>{{ gameData }}</h1>
  <button class="backward" @click="Fall">◀️</button>
  <h3>{{ page }}</h3>
  <button class="foward" @click="Jump">▶️</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
