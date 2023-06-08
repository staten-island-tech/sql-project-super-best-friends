<template>
  <div class="box">
    <div class="sign-in-container">
      <p>Sign-In To Your Account Here</p>
      <form class="sign-in">
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
      <button @click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase.js";
import router from "../router/index.js";
// import { defineStore } from "pinia";

const email = ref("");
const password = ref("");

async function signIn() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    router.push("GameCard");
  } catch (error) {
    console.log("An error occurred during signin", error);
  }
}

// export const logins = defineStore("account", {
//   // arrow function recommended for full type inference
//   state: () => {
//     return {
//       // all these properties will have their type inferred automatically
//       count: 0,
//       email: email,
//       password: password,
//       isSignedIn: true,
//     };
//   },
// });
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

.sign-in {
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

.sign-in-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #36393e;
  color: white;
}

.sign-in-container input {
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
  margin: 10px;
}
</style>
