<script setup>
import { RouterLink, RouterView } from "vue-router";

import HomeView from "./views/HomeView.vue";
import { onMounted, ref } from "vue";
// import Account from "./components/AccountLog.vue";
// import Auth from "./components/AuthLog.vue";
import { supabase } from "./supabase.js";

// const session = ref(false);

onMounted(() => {
  console.log("Poo");
  // supabase.auth.getSession().then(({ data }) => {
  //   session.value = data.session;
  // });

  // supabase.auth.onAuthStateChange((_, _session) => {
  //   session.value = _session;
  // });
});
</script>

<template>
  <nav class="container">
    <li><RouterLink to="/"> Home</RouterLink></li>

    <li><RouterLink to="/sign-in"> Sign-In</RouterLink></li>
    <li><RouterLink to="/sign-up"> Sign-Up</RouterLink></li>
  </nav>
  <hr />

  <RouterView />
  <div class="container">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
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
