<template>
    <h1>Real-time Listeners</h1>
    <div v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { db } from '../firebase/config'
  import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; 
  
  export default {
    setup() {
      const posts = ref([])
  
      const postsCollection = collection(db, 'posts')
      const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'))
  
      onSnapshot(postsQuery, snap => {
        let docs = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        posts.value = docs
      })
  
      return { posts }
    }
  }
  </script>
  
  <style>
  </style>
  