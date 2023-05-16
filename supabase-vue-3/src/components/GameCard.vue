<template>
  <div class="card">
    <img
      src="https://sm.ign.com/t/ign_ap/deal/d/daily-deal/daily-deals-save-on-zelda-totk-root-a-game-of-woodland-might_d5x8.1280.jpg"
      alt="URMA"
    />
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
  width: 33%;
  border-radius: 15px;
}
</style>
