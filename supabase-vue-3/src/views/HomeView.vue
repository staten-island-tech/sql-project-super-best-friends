<script async setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import GameCard from "../components/GameCard.vue";
import { AuthStore } from "../stores/AuthStore";
import { LikeStore } from "../stores/LikeStore";

const storeLike = LikeStore();
const storeAuth = AuthStore();
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
const response_content = ref("");
const page = ref("1");
const userLikes = ref([]);

async function getGames(page) {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page=${page.value}&page_size=9&platforms=18%2C1%2C7&ordering=rating-`
  );

  response_content.value = await res.json();
  console.log(response_content.value.results);
  // "UserEmail"
  console.log("ASJHDHSAIKJHDKJHASKJHDKJHASKJHKJDHKJHASJKHDKJHKASHKD");
  console.log(storeAuth.currentUser);
  //get the users liked games from supabase
  const { error, data } = await supabase
    .from("accounts")
    .select("Likes")
    .eq("UserEmail", storeAuth.currentUser.email);

  if (error) {
    console.log(error);
  }
  console.log(data);
  userLikes.value = data;
  // TRY THIS IF IT DOESNT WORK
  storeLike.Like.concat(data);
  // storeLike.Like = data;
  console.log("LIKES IN STORE");
  console.log(storeLike.Like);
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
  <!-- <div class="Buttons">
    <button class="backward" @click="Fall">◀️</button>
    <h4>{{ page }}</h4>
    <button class="foward" @click="Jump">▶️</button>
  </div> -->

  <div class="GameBox flex">
    <GameCard
      v-for="response in response_content.results"
      :Game="response"
      :title="response.name"
      :isLiked="storeLike.Like.includes(response.id)"
    ></GameCard>
  </div>

  <!-- <div class="Buttons">
    <button class="backward" @click="Fall">◀️</button>
    <h4>{{ page }}</h4>
    <button class="foward" @click="Jump">▶️</button>
  </div> -->
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
