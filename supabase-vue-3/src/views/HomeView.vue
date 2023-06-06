<script async setup>
import { ref, watch } from "vue";
import GameCard from "../components/GameCard.vue";

let description_content = ref("");
const games = ref("");
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
// function ClosePopUp() {
//   document.querySelector(".GameBox").classList.add("Showit");
//   document.querySelector(".GameBox").classList.remove("Hideit");
//   document.querySelector(".Buttons").classList.add("Showit");
//   document.querySelector(".Buttons").classList.remove("Hideit");
//   document.querySelector(".Popup").classList.add("Hideit");
// }
// async function PopIt(event) {
//   console.log(event.target.id);
//   document.querySelector(".Popup").classList.remove("Hideit");
//   document.querySelector(".Popup").classList.add("Showit");
//   document.querySelector(".GameBox").classList.add("Hideit");
//   document.querySelector(".Buttons").classList.add("Hideit");

//   const res = await fetch(
//     `https://api.rawg.io/api/games/${event.target.id}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
//   );
//   console.log(res.url);
//   description_content.value = await res.json();
// }
</script>

<template>
  <!-- <div class="Popup Hideit">
    <h1>
      {{ description_content.name }}
    </h1>
    <button @click="ClosePopUp">X</button>
    <hr />
    <h2>Description</h2>
    <p>{{ description_content.description_raw }}</p>

    <img
      class="PopImg"
      :src="description_content.background_image"
      :alt="description_content.name"
    />
    <p>Released: {{ description_content.released }}</p>
    <p>Rating: {{ description_content.rating }} out of 5</p>
    <h3>Developers</h3>
    <hr />
    <p v-for="description in description_content.developers">
      {{ description.name }}
    </p>
    <h3>Platforms</h3>
    <hr />
    <p v-for="description in description_content.platforms">
      {{ description.platform.name }}
    </p>
    <h3>Genres</h3>
    <hr />
    <p v-for="description in description_content.genres">
      {{ description.name }}
    </p>
    <button style="align-self: center" @click="ClosePopUp">X</button>
  </div> -->

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
.PopImg {
  height: 20vh;
}
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
.Popup {
  height: 100%;
  text-align: left;
}
.Showit {
  visibility: visible;
}
.Hideit {
  display: none;
  visibility: hidden;
}
.GameBox {
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
