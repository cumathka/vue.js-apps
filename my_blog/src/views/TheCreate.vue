<template>
    <div class="create">
      <form @submit.prevent="addPost">
        <label>Title :</label>
        <input v-model="title" type="text" required />
        <label>Content :</label>
        <textarea v-model="body" required></textarea>
        <label>Tags (hit enter to add tag)</label>
        <input v-model="tag" @keydown.enter.prevent="addTag" type="text" />
        <div class="tags">
          <span v-for="(tag, index) in tags" :key="index" class="tag">
            <h3>#{{ tag }}</h3>
          </span>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const title = ref("");
      const body = ref("");
      const tag = ref("");
      const tags = ref([]);
  
      const addTag = () => {
        const newTag = tag.value.trim();
        if (newTag && !tags.value.includes(newTag)) {
          tags.value.push(newTag);
        }
        tag.value = "";
      };
  
      const addPost = async () => {
        try {
          const post = {
            title: title.value,
            body: body.value,
            tags: tags.value
          };
          await fetch("http://localhost:8081/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
          });
          title.value = "";
          body.value = "";
          tags.value = [];
        } catch (err) {
          console.error(err);
        }
      };
  
      return {
        title,
        body,
        tag,
        tags,
        addTag,
        addPost
      };
    }
  };
  </script>
  
  <style>
  .create {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  input[type="text"],
  textarea {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    width: 100%;
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  button {
    padding: 10px 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    margin-bottom: 20px;
  }
  
  .tag {
    background-color: #fff9;
    color: #007bff;
    border-radius: 4px;
    padding: 2px 2px;
    font-size: 0.9em;
    border-radius: 3px;
  }
  </style>
  