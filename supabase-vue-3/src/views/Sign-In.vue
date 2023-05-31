<template>
  <div class="box">
    <p>New to _____? Create an Account Here</p>
    <div class="log-in">
      <p>Log In</p>
    </div>
    <div class="username">
      <input type="text" id="user" placeholder="Email Address" />
    </div>
    <div class="password">
      <input type="text" id="pass" placeholder="Password" />
    </div>
    <div>
      <button class="btn">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.box {
  width: 175%;
  border-color: black;
  border-style: solid;
  border-width: 1.5px;
  color: black;
}

.btn {
  margin: 10px;
}

::placeholder {
  color: black;
}
</style>
