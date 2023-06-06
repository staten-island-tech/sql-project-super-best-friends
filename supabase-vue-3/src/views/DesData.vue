<template>
  <div class="Container">
    <h1>
      {{ Game.name }}
    </h1>

    <hr />
    <h2>Description</h2>
    <p>{{ Game.description_raw }}</p>

    <img :src="Game.background_image" :alt="Game.name" />
    <p>Released: {{ Game.released }}</p>
    <p>Rating: {{ Game.rating }} out of 5</p>
    <h3>Developers</h3>
    <hr />
    <p v-for="G in Game.developers">
      {{ G.name }}
    </p>
    <h3>Platforms</h3>
    <hr />

    <p v-for="G in Game.platforms">
      {{ G.platform.name }}
    </p>
    <h3>Genres</h3>
    <hr />
    <p v-for="G in Game.genres">
      {{ G.name }}
    </p>
    <RouterLink to="/" style="align-self: center"><h1>X</h1></RouterLink>
  </div>
</template>

<style scoped>
img {
  height: 50vh;
}

.Container {
  color: white;
  background: rgba(0, 0, 0, 0.3);
}
</style>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      Game: {},
    };
  },
  mounted: async function () {
    console.log(this.$route.params.id);
    await this.GetGameDes();
  },
  methods: {
    GetGameDes: async function () {
      const RAWG_API_KEY = "6c361a8e1cbd4e54968bb6859e285e08";
      let res = await fetch(
        `https://api.rawg.io/api/games/${this.$route.params.id}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
      );

      console.log(this.$route.params.id);
      let data = await res.json();
      this.Game = data;
    },
  },
};
</script>
