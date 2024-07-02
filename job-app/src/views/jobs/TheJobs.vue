<template>
  <div>
    <h1 class="title">Job List</h1>
    <div class="job-list" v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <h3>{{ job.title }}</h3>
        <p>{{ job.details }}</p>
        <router-link :to="{name : 'JobDetails', params :{id : job.id}}"> <button class="details-button">Details</button></router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading ...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    };
  },
  mounted() {
    fetch('http://localhost:3001/jobs')
    .then((res)=>res.json())
    .then(data =>this.jobs = data )
    .catch(err => console.log(err.message))
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: #32a8df;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-decoration: underline;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.job-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.job-card:hover {
  transform: translateY(-5px);
}

.job-card h3 {
  margin: 0;
  color: #333;
  font-size: 1.5em;
}

.job-card p {
  margin: 10px 0 0;
  color: #666;
}

.details-button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.details-button:hover {
  background-color: #369b7d;
}

.details-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.5);
}
</style>
