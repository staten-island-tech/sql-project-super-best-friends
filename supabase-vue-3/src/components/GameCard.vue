<template>
  <div class="card">
    <router-link :to="DataPath"> {{ Game.name }}</router-link>
    
    <!-- <button :id="Game.id" @click="handleItemClick($event)">{{AA}}</button> -->
    <img :src="Game.background_image" :alt="Game.name" />
    <p  @click="Liking">
      <h1 :id="Game.id" :class="Game.slug" @click="Exists" v-if="Liked" style="color: red" >♥</h1>
      <h1 :id="Game.id" :class="Game.slug" @click="AintExist" v-else  >♥</h1>
    </p>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
Clean up Css a bit 
Make PopUp Card  -->
<script setup>
//Imports

import { LikeStore } from "../stores/LikeStore";
import { ref } from "vue";
import { computed } from "vue";
import { supabase } from "../supabase";
import { RouterLink, RouterView } from "vue-router";
import { AuthStore } from "../stores/AuthStore";

const StoreAuth = AuthStore();

const handleItemClick = (event) => {
  const id = event.target.id
  StoreLike.PushLike(id);
};
const StoreLike = LikeStore();

async function checkExists(event) {
  // Liked.value = !Liked.value
  const Id = event.target.id;

  // Query the table to check if the record ID exists
  const { data, error } = await supabase
    .from("like_system")
    .select("*")
    .eq("id", Id)
    .single();

  if (data) {
    // Record exists

    await Exists(event);
  } else if (error) {
    // Record does not exist
    await AintExist(event);
  }
}
async function Exists(event) {
  const { data, error } = await supabase
    .from("like_system")
    .delete()
    .match({id: event.target.id, user_id: StoreAuth.currentUser});
    console.log("Deleted from Supabase");
}
async function AintExist(event) {
  const { error } = await supabase
    .from("like_system")
    .insert({ id: event.target.id, name: event.target.classList[0], user_id: StoreAuth.currentUser });
  console.log("Added to Supabase");
}
let Liked = ref(false);
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
