<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">
        <button class="home-button">Go to Home</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  .not-found h1 {
    font-size: 3em;
    color: #ff4c4c;
  }
  
  .not-found p {
    font-size: 1.2em;
    color: #666;
  }
  
  .home-button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .home-button:hover {
    background-color: #369b7d;
  }
  
  .home-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.5);
  }
  </style>
  