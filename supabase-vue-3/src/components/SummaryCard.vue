<template>
  <div class="Popup Hideit">
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
  </div>
</template>

<script async setup>
import { ref, watch } from "vue";
async function PopIt(event) {
  console.log(event.target.id);
  // document.querySelector(".Popup").classList.remove("Hideit");
  // document.querySelector(".Popup").classList.add("Showit");
  // document.querySelector(".GameBox").classList.add("Hideit");
  // document.querySelector(".Buttons").classList.add("Hideit");

  const res = await fetch(
    `https://api.rawg.io/api/games/${event.target.id}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
  );
  console.log(res.url);
  description_content.value = await res.json();
}
</script>

<style scoped></style>
