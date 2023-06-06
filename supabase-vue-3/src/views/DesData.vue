<template>
  <h1>Test</h1>
  <h1>{{ $route.params.id }}</h1>
  <h1>{{ Game }}</h1>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      Game: {},
    };
  },
  mounted: async function () {
    console.log(route.params.id);
    await GetGameDes();
  },
  methods: {
    GetGameDes: async function () {
      const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
      let res = await fetch(
        `https://api.rawg.io/api/games/${this.$route.params.id}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
      );

      console.log(route.params.id);
      let data = await res.json();
      this.Game = data;
    },
  },
};
</script>
