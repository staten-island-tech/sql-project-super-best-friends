<template>
  <div class="card">
    <router-link :to="DataPath"> {{ Game.name }}</router-link>
    <h1>{{ StoringLikes }}</h1>
    <!-- <button :id="Game.id" @click="handleItemClick($event)">{{AA}}</button> -->
    <img :id="Game.id" :src="Game.background_image" :alt="Game.id" />
    <p  @click="Liking">
      <h1 :id="Game.id" :class="Game.name" @click="AintExist" v-if="Unliked" >♥</h1>
      <h1 :id="Game.id" :class="Game.name" @click="Exists" v-else style="color: red" >♥</h1>
    </p>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
Clean up Css a bit 
Make PopUp Card  -->
<script setup>
//Imports
import { LikeStore } from "../stores/Like";
import { ref } from "vue";
import { computed } from "vue";
import { supabase } from "../supabase";
import { RouterLink, RouterView } from "vue-router";

//Refs
let StoringLikes = {}
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
    .eq("id", event.target.id);

    console.log("Added to Supabase");
}
async function AintExist(event) {
  const { error } = await supabase
    .from("like_system")
    .insert({ id: event.target.id, name: event.target.classList[0] });
    if(!StoringLikes.contains(event.target.id)){
      StoringLikes.push(event.target.id)
    }
  console.log("Deleted from Supabase");
}
let Unliked = ref(true);
function Liking(){
  Unliked.value = !Unliked.value
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
