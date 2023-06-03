<template>
  <div class="box">
    <img
      src="https://app.logopony.com/preview/ee18a8c6-6fef-4bcf-bcec-b64f7356cb4c"
      alt=""
    />
    <p>New to _____? Create an Account Here</p>
    <div class="log-in">
      <p>Log In To Your Account</p>
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
@import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap");

* {
  font-family: "Dongle", sans-serif;
  font-size: 30px;
}

body {
  background-color: black;
}
.box {
  width: 150%;
  margin-left: auto;
  margin-right: auto;
  border-color: black;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 10px;
  color: black;

  background-color: white;
}

.btn {
  margin: 10px;
}

::placeholder {
  color: black;
}

input {
  border-radius: 5px;
}

.username {
  margin: 10px;
}
</style>
