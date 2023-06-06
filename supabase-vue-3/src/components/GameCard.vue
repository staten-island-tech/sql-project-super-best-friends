<template>
  <div class="card" :id="Game.id">
    <router-link :to="DataPath"> {{ Game.name }}</router-link>

    <img :id="Game.id" :src="Game.background_image" :alt="Game.id" />
    <p class="heart" @click="Liking">
      <h1 v-if="Liked">♥</h1>
      <h1 v-else style="color: red">♥</h1>
    </p>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
Clean up Css a bit 
Make PopUp Card  -->
<script setup>
//Imports
import { ref } from "vue";
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

//Refs
let Liked = ref(true);
function Liking(){
  Liked.value = !Liked.value
}

const props = defineProps({
  Game: Object,
});
const DataPath = computed(() => {
  return `/DesData/${props.Game.id}`;
});
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card {
  background-color: rgb(83, 80, 80);
  color: white;
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
}
.liked {
  color: red;
}
.unliked {
  color: white;
}
.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.heart{
  user-select: none;
}
</style>
