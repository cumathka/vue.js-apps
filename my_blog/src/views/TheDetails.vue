<template>
    <div class="post-detail" v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <div class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
    </div>
    <div v-else class="loading">
      <the-spinner></the-spinner>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import getPost from '../composable/getPost';
  import TheSpinner from '@/components/TheSpinner.vue';
  export default {
    name: 'PostDetail',
    components : {TheSpinner},
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const { post, error, load } = getPost(props.id);
  
      onMounted(load);
  
      return {
        post,
        error
      };
    }
  };
  </script>
  
  <style scoped>
  .post-detail {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .post-detail:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .post-detail h2 {
    margin: 0 0 10px;
    font-size: 1.8em;
    color: #333;
  }
  
  .post-detail p {
    margin: 0 0 15px;
    font-size: 1.2em;
    color: #666;
  }
  
  .tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
  }
  
  .tag {
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 0.9em;
  }
  
  .loading {
    font-size: 1.5em;
    color: #999;
    text-align: center;
    padding: 20px;
  }
  </style>
  