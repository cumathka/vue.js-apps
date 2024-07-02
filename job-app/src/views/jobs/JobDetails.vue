<template>
    <div v-if="job" class="job-details">
      <h1>{{ job.title }}</h1>
      <p class="job-id">The job id {{ job.id }}</p>
      <p>{{ job.details }}</p>
    </div>
    <div v-else class="job-not-found">
      <h1>Job Not Found</h1>
      <p>The job you are looking for does not exist.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobDetails',
    props: ['id'],
    data() {
      return {
        job: null,
      };
    },
    mounted() {
      fetch("http://localhost:3001/jobs/" + this.id)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          this.job = data;
        })
        .catch((err) => {
          console.log(err.message);
          this.job = null; // Fetch failed, set job to null
        });
    },
  };
  </script>
  
  <style scoped>
  .job-details {
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .job-id {
    font-style: italic;
    color: #666;
  }
  
  .job-not-found {
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #ff6347;
  }
  </style>
  