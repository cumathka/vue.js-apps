<template>
  <div class="project" :class="{ completed: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">
        {{ project.title }}
      </h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params :{id : project.id}}">
          <span class="material-icons edit">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons delete">delete</span>
        <span
          @click="toggleComplete"
          :class="{ done: project.complete, 'not-done': !project.complete }"
          class="material-icons done"
          >done</span
        >
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    deleteProject() {
      const url = "http://localhost:3001/projects/" + this.project.id;
      console.log("Deleting project at URL:", url);

      fetch(url, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            this.$emit("delete-project", this.project.id);
          } else {
            console.error("Failed to delete the project");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    },
    toggleComplete() {
      const url = "http://localhost:3001/projects/" + this.project.id;
      console.log("Toggling complete at URL:", url);

      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then((response) => {
          if (response.ok) {
            this.project.complete = !this.project.complete;
            this.$emit("update-project", this.project.id, {
              complete: this.project.complete,
            });
          } else {
            console.error("Failed to toggle complete status");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 6px solid #e90074;
  transition: border-left 0.3s ease;
}
.project.completed {
  border-left: 6px solid green;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  color: #777;
  cursor: pointer;
}
.material-icons.edit {
  color: blue;
}
.material-icons.delete {
  color: red;
}
.material-icons.done {
  color: gray;
}
.material-icons.done.done {
  color: green;
}
.material-icons.done.not-done {
  color: gray;
}

</style>
