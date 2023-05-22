<script setup>
import { ref } from "vue";

const games = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
let page = ref("");

async function getGames() {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page}&page_size=100&platforms=18%2C1%2C7&ordering=rating`
  );
  const reponse_content = await res.json();
  console.log(reponse_content);
}
getGames();
function Jump() {
  page.value++;
  console.log(page.value);
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
  console.log(page.value);
  return page.value;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button class="backward" @click="Fall">◀️</button>
  <button class="foward" @click="Jump">▶️{{ page }}</button>
  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
