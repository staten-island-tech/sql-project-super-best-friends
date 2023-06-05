<template>
  <div class="card" :id="Game.id">
    <p :id="Game.id">{{ Game.name }}</p>
    <img :id="Game.id" :src="Game.background_image" :alt="Game.id" />
    <!-- <h2 @click="checkExists" :class="Game.name" :id="`H` + Game.id">♥</h2> -->
    <button @click="UnLiked = !UnLiked">
      <h1 v-if="UnLiked">♥</h1>
      <h1 v-else style="color: red">♥</h1>
    </button>
    <button @click="PopIt">Sum</button>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
 -->
<script async setup>
import { ref, watch } from "vue";
import { supabase } from "../supabase";
// Poop();
const UnLiked = ref(true);
const props = defineProps({
  Game: Object,
  title: String,
  summary: String,
  picture: String,
});
// async function PopIt(event) {
//   console.log(event.target.id);
//   document.querySelector(".Popup").classList.remove("Hideit");
//   document.querySelector(".Popup").classList.add("Showit");
//   document.querySelector(".GameBox").classList.add("Hideit");
//   document.querySelector(".Buttons").classList.add("Hideit");

//   const res = await fetch(
//     `https://api.rawg.io/api/games/${event.target.id}?dates=2022-01-01%2C2022-12-30&key=${RAWG_API_KEY}&page_size=39&platforms=18%2C1%2C7&ordering=rating-`
//   );
//   console.log(res.url);
//   description_content.value = await res.json();
// }
// async function Poop() {
//   const { data, error } = await supabase.from("like_system").select();

//   let aa = await supabase.from("like_system").select();
//   let LikeData = aa.data;

//   if (data) {
//     LikeData.forEach((el) => {
//       document.querySelector(`#H${el.id}`).classList.add(`liked`);
//     });
//   }
// }
// const { error } = await supabase
//   .from("like_system")
//   .insert({ id: event.target.id, name: event.target.classList[0] });

// console.log(await supabase.from("like_system").select().eq("id", 685577));

async function checkExists(event) {
  event.stopPropagation();
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
  const { error } = await supabase
    .from("like_system")
    .delete()
    .eq("id", event.target.id);
  console.log("Existed Deleted");
}
async function AintExist(event) {
  const { error } = await supabase
    .from("like_system")
    .insert({ id: event.target.id, name: event.target.classList[0] });
  console.log("Aint exist Added");
}
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
</style>
