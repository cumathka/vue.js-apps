<template>
  <div class="home">
    <h1>Home</h1>
   
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="posts.length"> <post-list :posts="posts"></post-list> </div>
    <div v-else>
      <the-spinner></the-spinner>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composable/getPosts'
import TheSpinner from '../components/TheSpinner.vue'
export default {
  name: 'HomeView',
  components: {
    PostList, TheSpinner
  },
  setup() {
    
   const {posts ,error ,load} = getPosts()

   load() ;
    return {
      posts,
      error,
    }
  }
}
</script>

<style>
.home {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
}
.error {
  color: red;
  margin-top: 20px;
}
</style>
