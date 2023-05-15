<template></template>
<script setup>
import { ref } from "vue";

const games = ref("");
async function getGames() {
  let res = await fetch(
    " https://www.giantbomb.com/api/games/?api_key=ca834b0bc19031dd425f6099ccb9d361ebb6beba"
  );
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
