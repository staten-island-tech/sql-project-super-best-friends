<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./views/HelloWorld.vue";
import GameCard from "./components/GameCard.vue";



import HomeView from "./views/HomeView.vue";
import { onMounted, ref } from "vue";
import Account from "./components/AccountLog.vue";
import Auth from "./components/AuthLog.vue";
import { supabase } from "./supabase";

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <HomeView></HomeView>
  <div class="container">
    <nav>
      <RouterLink to="/"> Home</RouterLink>
      <RouterLink to="/gamecard"> Game Card</RouterLink>
      <RouterLink to="/sign-in"> Sign-In</RouterLink>
    </nav>
    <RouterView />
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
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
