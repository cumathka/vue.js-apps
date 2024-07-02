<template>
  <div class="home">
    <filtered-project @filterChange="current=$event" :current="current"></filtered-project>
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id">
        <single-project :project="project" @delete-project="removeProject" @update-project="updateProject"></single-project>
      </div>
    </div>
  </div>
</template>

<script>
import FilteredProject from '@/components/FilteredProject.vue'
import SingleProject from '../components/SingleProject.vue'


export default {
  name: 'HomeView',
  components: { SingleProject,FilteredProject },
  data() {
    return {
      projects: [],
      current : 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3001/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    removeProject(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    updateProject(id, updates) {
      const project = this.projects.find(project => project.id === id);
      if (project) {
        Object.assign(project, updates);
      }
    }
  },
  computed  :{
    filteredProject(){
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }
      if(this.current === 'incomplete'){
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }
}
</script>
