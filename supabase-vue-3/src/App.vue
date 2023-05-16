<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import GameCard from "./components/GameCard.vue";
</script>

<template>
  <GameCard
    title="Legend of Zelda: Tears of the Ligma"
    summary="Link runs around looking for Zelda and then he finds her"
  ></GameCard>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
