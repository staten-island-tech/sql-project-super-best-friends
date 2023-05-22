<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./views/HelloWorld.vue";
import GameCard from "./components/GameCard.vue";
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/gamecard">Game Card</RouterLink>
      <RouterLink to="/sign-in">Sign-In</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
}
</style>
