<template>
  <div class="box">
    <div class="sign-up-container">
      <p>Sign-Up For An Account Here</p>
      <form class="sign-up">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          id="email"
          placeholder="Email Address"
        />
        <label for="password">Password</label>
        <input
          v-model="password"
          type="text"
          id="password"
          placeholder="Password"
        />
      </form>
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase.js";
// import { defineStore } from "pinia";

const email = ref("");
const password = ref("");

async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  } catch (error) {
    console.log("An error occurred during signup", error);
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap%22");

* {
  font-family: "Dongle", sans-serif;
  font-size: 30px;
}

body {
  background-color: black;
}

.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box {
  width: 40vw;
  border-color: black;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 10px;
  color: black;
  background-color: #36393e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sign-up-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #36393e;
  color: white;
}

.sign-up-container input {
  border-radius: 0.2rem;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 15px;
}

button {
  margin: 15px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

::placeholder {
  color: black;
}

input {
  border-radius: 5px;
}

.username {
  margin: 7px;
}
</style>
