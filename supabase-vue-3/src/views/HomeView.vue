<script async setup>
import { ref, watch } from "vue";
import GameCard from "../components/GameCard.vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");
<<<<<<< HEAD:supabase-vue-3/src/components/HelloWorld.vue
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
=======
let response_content = ref("");
>>>>>>> 8b9f34075a9c0e4632ccade0d3991f1cb83e1f2f:supabase-vue-3/src/views/HomeView.vue

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
  );
<<<<<<< HEAD:supabase-vue-3/src/components/HelloWorld.vue

  reponse_content.value = await res.json();
>>>>>>> 40a61150b195d1022c83c689113392294c4e9641
=======
  console.log(res.url);
  response_content.value = await res.json();
>>>>>>> 8b9f34075a9c0e4632ccade0d3991f1cb83e1f2f:supabase-vue-3/src/views/HomeView.vue
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
<<<<<<< HEAD:supabase-vue-3/src/components/HelloWorld.vue
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
=======
  <div class="GameBox">
    <GameCard
      v-for="response in response_content.results"
      :Game="response"
      :title="response.name"
    ></GameCard>
  </div>

>>>>>>> 8b9f34075a9c0e4632ccade0d3991f1cb83e1f2f:supabase-vue-3/src/views/HomeView.vue
  <button class="backward" @click="Fall">◀️</button>
  <button class="foward" @click="Jump">▶️</button>
</template>

<style scoped>
.GameBox {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
