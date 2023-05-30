<template>
  <div @click="" class="card">
    <img
      src="https://www.highsnobiety.com/static-assets/thumbor/SslAH-OYIgo6IxpwzVf8Mto0CBI=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/09/20171839/fortnite-balenciaga-collaboration-release-info-feat.jpg"
      alt="URMA"
    />
    <p>{{ title }}</p>
    <p>{{ summary }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
let id = ref("");
const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
export default {
  name: "Card",
  props: {
    title: String,
    summary: String,
    id: Number,
  },
  methods: {
    Sum: async function (id) {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&&page_size=100&platforms=18%2C1%2C7&ordering=rating`
      );
      reponse_content.value = await res.json();
      console.log(reponse_content.value.description);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
}
.card {
  background-color: blanchedalmond;
  padding: 0;
  width: 25%;
  height: 10%;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
}

.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
