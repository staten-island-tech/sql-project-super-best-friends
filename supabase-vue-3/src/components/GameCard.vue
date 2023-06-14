<template>
  <div class="card">
    <router-link class="title" :to="DataPath"> {{ Game.name }}</router-link>
    
    <!-- <button :id="Game.id" @click="handleItemClick($event)">{{AA}}</button> -->
    <img :src="Game.background_image" :alt="Game.name" />
    <p  @click="likeGame(Game.id)">
      <h1 :id="Game.id" :class="Game.slug" v-if="Liked" style="color: red" >♥</h1>
      <h1 :id="Game.id" :class="Game.slug" v-else  >♥</h1>
    </p>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
Clean up Css a bit 
Make PopUp Card  -->
<script setup>
//Imports
import { ref, onBeforeUpdate } from "vue";
import { computed } from "vue";
import { supabase } from "../supabase";
import { RouterLink, RouterView } from "vue-router";
import { AuthStore } from "../stores/AuthStore";
import { LikeStore } from "../stores/LikeStore";

const props = defineProps({
  Game: Object,
  title: String,
  isLiked: Boolean
});
const StoreLikes = LikeStore();
const StoreAuth = AuthStore();
const Liked = ref(props.isLiked);

async function likeGame(id){
  const gameId = id;
  console.log("clicked on game with id", gameId);
  Liked.value = !Liked.value;
  console.log(Liked.value)
  if(Liked.value === false) {
    const likeIndex = StoreLikes.Like.indexOf(gameId);
    StoreLikes.Like.splice(likeIndex, 1);
    console.log("NEW LIKES AFTER REMOVAL", StoreLikes.Like)
    const userEmail = StoreAuth.currentUser.email;
    const { error } = await supabase.from("accounts").update({ Likes: StoreLikes.Like }).eq("UserEmail", userEmail);
    if (error) {
      console.log(error);
    }
    return
  }
  //update the like in the store
  // StoreLikes.Like.push(gameId);
  //update the like in supabase
  StoreLike.Like.push(gameId);
  const userEmail = StoreAuth.currentUser.email;
  console.log('ADDING THE FOLLOWING INTO SUPABASE', StoreLikes.Like);
  console.log(typeof(StoreLikes.Like))
  console.log(userEmail)
  const { error } = await supabase.from("accounts").update({ Likes: StoreLikes.Like }).eq("UserEmail", userEmail);
  if (error) {
    console.log(error);
  }
  console.log("Updated the like in supabase")
}

const StoreLike = LikeStore();
const DataPath = computed(() => {
  return `/DesData/${props.Game.id}`;
});

const handleItemClick = (event) => {
  const id = event.target.id
  StoreLike.PushLike(id);
};

async function checkExists(event) {
  // Liked.value = !Liked.value
  const Id = event.target.id;

  // Query the table to check if the record ID exists
  const { data, error } = await supabase
    .from("likes")
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
    .from("likes")
    .delete()
    .match({id: event.target.id, user_id: StoreAuth.currentUser});
    console.log("Deleted from Supabase");
}

async function AintExist(event) {
  const { error } = await supabase
    .from("likes")
    .insert({ id: event.target.id, name: event.target.classList[0], user_id: StoreAuth.currentUser });
  console.log("Added to Supabase");
}
</script>

<style scoped>
img {
  width: 90%;
  height: 100%;
  border-radius: 0.4rem;
}
.card {
  background-color: #36393e;
  color: white;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
  border-radius: 0.4rem;
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
  margin: 0;
}

.title {
  font-size: 1.75rem;
  margin-bottom: 15px;
}

h1{
  margin: 0;
}
</style>
