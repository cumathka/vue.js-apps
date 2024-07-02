<template>
    <div class="items">
      <router-link :to="{ name: 'details', params: { id:post.id } }">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ snippet }}</p>
      <div class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  export default {
    props: ["post"],
    setup(props) {
      const snippet = computed(() => {
        return props.post.body.substring(0, 99) + " ...";
      });
      return {
        snippet
      };
    }
  };
  </script>
  
  <style>
  .items {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .items:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .items h3 {
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
  }
  
  .items p {
    margin: 0 0 15px;
    font-size: 1em;
    color: #666;
  }
  
  .tags {
    margin-top: 4px;
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
  </style>
  