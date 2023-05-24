<script async setup>
import { ref, watch } from "vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");
let reponse_content = ref("");
let Link = ref("");

async function getGames(page) {
  let x = page.value;
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${x}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
  );
  Link.value = res.url;
  reponse_content.value = await res.json();
  console.log(Link.value);
}

function Jump() {
  page.value++;
  getGames(page);
  return page.value;
}
function Fall() {
  if (page.value <= 1) {
    document.querySelector(".backward").disabled = true;
  } else if (page.value >= 2) {
    page.value--;
    getGames(page);
    return page;
  }
  document.querySelector(".backward").disabled = false;

  return page.value;
}
/* watch(page, async (currentValue) => {
  await getGames(Number(currentValue));
}); */
</script>

<template>
  <h1>1{{ Link }}</h1>
  <button class="backward" @click="Fall">◀️</button>
  <h3>{{ page }}</h3>
  <button class="foward" @click="Jump">▶️</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
