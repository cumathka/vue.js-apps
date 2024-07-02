<template>
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="title" required>
      <label>Details</label>
      <textarea v-model="details" required></textarea>
      <button>Update Project</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        title: '',
        details: ''
      };
    },
    mounted() {
      fetch('http://localhost:3001/projects/' + this.id)
        .then(res => res.json())
        .then(data => {
          this.title = data.title;
          this.details = data.details;
        })
        .catch(err => console.error('Error fetching project:', err.message));
    },
    methods: {
      handleSubmit() {
        fetch('http://localhost:3001/projects/' + this.id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: this.title, details: this.details })
        })
          .then(() => {
            this.$router.push('/');
            
          })
          .catch(err => {
            console.error('Error updating project:', err.message);
            alert('There was an error updating the project. Please try again.');
          });
      }
    }
  };
  </script>
  
  <style>
  form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
  }
  input {
    padding: 15px; /* Increase padding */
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px; /* Increase font size */
    color: #333; /* Change text color */
    background-color: #f9f9f9; /* Change background color */
  }
  textarea {
    border: 1px solid #ddd;
    padding: 15px; /* Increase padding */
    width: 100%;
    box-sizing: border-box;
    height: 150px; /* Increase height */
    font-size: 18px; /* Increase font size */
    color: #333; /* Change text color */
    background-color: #f9f9f9; /* Change background color */
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer; /* Add cursor change on hover */
    transition: background 0.3s; /* Add transition for hover effect */
  }
  form button:hover {
    background: #00b379; /* Change background color on hover */
  }
  </style>
  