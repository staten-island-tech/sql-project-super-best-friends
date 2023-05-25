<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import GameCard from "./components/GameCard.vue";

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
  <HelloWorld></HelloWorld>
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
