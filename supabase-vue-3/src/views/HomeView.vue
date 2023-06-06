<script async setup>
import { ref } from "vue";
import GameCard from "../components/GameCard.vue";
import { supabase } from "../supabase";

const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");
let response_content = ref("");

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
  );
  console.log(res.url);
  response_content.value = await res.json();
  // response_content.removeIf((i) => i.background_image() == null);
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
  <div class="GameBox flex">
    <GameCard
      v-for="response in response_content.results"
      :Game="response"
      :title="response.name"
    ></GameCard>
  </div>

  <div class="Buttons">
    <button class="backward" @click="Fall">◀️</button>
    <h4>{{ page }}</h4>
    <button class="foward" @click="Jump">▶️</button>
  </div>
</template>

<style>
img {
  height: 20vh;
}
button {
  margin: 15px;
}
.flex {
  display: flex;
}
.Buttons {
  display: flex;
  justify-content: center;
  height: fit-content;
}

.GameBox {
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
