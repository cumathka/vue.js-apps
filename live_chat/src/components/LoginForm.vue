<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="E-mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error"> {{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composable/useLogin";
export default {
  setup(props,contex) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
       contex.emit('login')
      } 
      console.log(error);
    };
    return {
      email,
      password,
      handleSubmit,
      error
    };
  },
};
</script>

<style></style>
