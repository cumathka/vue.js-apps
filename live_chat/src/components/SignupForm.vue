<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="E-mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composable/useSignup";
export default {
  setup(props,contex) {

    const {error ,signup} = useSignup()

    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value,password.value ,displayName.value)
      if(!error.value){
        contex.emit('signup')
        }
    }
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error
    };
  },
};
</script>

<style></style>
