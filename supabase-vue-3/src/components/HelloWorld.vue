<script async setup>
<<<<<<< HEAD
<<<<<<< HEAD:supabase-vue-3/src/views/HomeView.vue
import { ref } from "vue";
import GameCard from "../components/GameCard.vue";
=======
import { ref, watch } from "vue";
>>>>>>> parent of 8b9f340 (Progress?!!???):supabase-vue-3/src/components/HelloWorld.vue
=======
import { ref, watch } from "vue";
>>>>>>> parent of 8b9f340 (Progress?!!???)

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("1");
let reponse_content = ref("");

async function getGames(page) {
  const res = await fetch(
<<<<<<< HEAD
<<<<<<< HEAD:supabase-vue-3/src/views/HomeView.vue
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating-`
=======
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
>>>>>>> parent of 8b9f340 (Progress?!!???):supabase-vue-3/src/components/HelloWorld.vue
=======
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
>>>>>>> parent of 8b9f340 (Progress?!!???)
  );

  reponse_content.value = await res.json();
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
<<<<<<< HEAD:supabase-vue-3/src/views/HomeView.vue
  <h3 v-for="response in response_content.results" :key="name">
    {{ response.name }}
  </h3>
  <GameCard></GameCard>

  <div class="GameBox">
    <GameCard
      v-for="response in response_content.results"
      :Game="response"
      :title="response.name"
    ></GameCard>
  </div>

=======
  <h3 v-for="reponse in reponse_content.results" :key="name">
    {{ reponse.name }}
  </h3>
>>>>>>> parent of 8b9f340 (Progress?!!???):supabase-vue-3/src/components/HelloWorld.vue
=======
  <h3 v-for="reponse in reponse_content.results" :key="name">
    {{ reponse.name }}
  </h3>
>>>>>>> parent of 8b9f340 (Progress?!!???)
  <button class="backward" @click="Fall">◀️</button>
  <button class="foward" @click="Jump">▶️</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
