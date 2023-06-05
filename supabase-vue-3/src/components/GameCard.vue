<template>
  <div class="card" :id="Game.id">
    <p :id="Game.id">{{ Game.name }}</p>
    <img :id="Game.id" :src="Game.background_image" :alt="Game.id" />
    <h2 @click="checkExists" :class="Game.name" :id="`H` + Game.id">♥</h2>
  </div>
</template>
<!-- Bugs
'Liking One Stays on different page 
 -->
<script async setup>
import { supabase } from "../supabase";
Poop();
const props = defineProps({
  Game: Object,
  title: String,
  summary: String,
  picture: String,
});

async function Poop() {
  const { data, error } = await supabase.from("like_system").select();

  let aa = await supabase.from("like_system").select();
  let LikeData = aa.data;

  if (data) {
    LikeData.forEach((el) => {
      document.getElementById(`#H${el.id}`).classList.add(`liked`);
    });
  }
}
async function Like(event) {
  event.stopPropagation();
  if (event.target.classList.contains("unliked")) {
    event.target.classList.remove("unliked");
    event.target.classList.add("liked");
  } else {
    event.target.classList.remove("liked");
    event.target.classList.add("unliked");
  }

  const { error } = await supabase
    .from("like_system")
    .insert({ id: event.target.id, name: event.target.classList[0] });

  console.log(await supabase.from("like_system").select().eq("id", 685577));
}
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
