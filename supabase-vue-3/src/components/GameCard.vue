<template>
  <div class="card">
    <img {{ picture }} />
    <p>{{ title }}</p>
    <p>{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    summary: String,
    image: img,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
}
.card {
  background-color: blanchedalmond;
  padding: 0;
  width: 25%;
  height: 10%;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0px 0px 0.625rem black;
  transition: 0.3s all;
}

.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
