<template>
    <nav class="main-nav">
      <router-link :to="{ name: 'Home' }">Projects</router-link> |
      <router-link :to="{ name: 'AddProject' }">Add Project</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style>
  .main-nav {
    text-align: center;
    margin: 40px auto;
    background-color: #f8f8f8; /* Arka plan rengi */
    padding: 20px; /* İçerik boşluğu */
    border-radius: 10px; /* Köşe yumuşatma */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Gölgeleme efekti */
  }
  
  .main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
    transition: color 0.3s; /* Renk geçiş efekti */
  }
  
  .main-nav a:hover {
    color: #00ce89; /* Hover rengi */
  }
  
  a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
    color: #00ce89; /* Aktif link rengi */
  }
  </style>
  