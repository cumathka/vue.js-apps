<template>
    <div class="post-list">
      <div class="post" v-for="post in posts" :key="post.id">
       <single-post :post="post"></single-post>
      </div>
    </div>
  </template>
  
  <script>
import {ref } from 'vue'
  import SinglePost from './SinglePost.vue'
  export default {
    components: { SinglePost },
    props: ['posts'],
    setup(props){
     

        return{
       
        }
    }
  }
  </script>
  
  <style>
  .post-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .post {
    width: 80%;
    max-width: 600px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .post:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .post h3 {
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
  }
  
  .post p {
    margin: 0;
    font-size: 1em;
    color: #666;
  }
  </style>
  