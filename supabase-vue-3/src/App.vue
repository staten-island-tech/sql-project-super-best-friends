<script setup>
import { RouterLink, RouterView } from "vue-router";

import HomeView from "./views/HomeView.vue";
import { onMounted, ref } from "vue";
import { LikeStore } from "./stores/LikeStore";

import { supabase } from "./supabase.js";

const StoreLike = LikeStore();

onMounted(() => {});
</script>

<template>
  <h1>{{ StoreLike.Like }}</h1>
  <nav class="container">
    <li><RouterLink to="/"> Home</RouterLink></li>

    <li><RouterLink to="/sign-in"> Sign-In</RouterLink></li>
    <li><RouterLink to="/sign-up"> Sign-Up</RouterLink></li>
  </nav>
  <hr />

  <RouterView />
</template>

<style scoped>
.container {
  color: rgb(13, 26, 38);
  margin: 0;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100vw;
  z-index: 10;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  /* align-items: baseline; */
}
.container li {
  color: white;
  display: block;
  font-size: 0.7em;
  height: 50px;
  letter-spacing: 1px;
  margin: 0 20px;
  padding: 0 4px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  display: inline-block;
}
</style>
