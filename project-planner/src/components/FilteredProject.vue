<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{active: current === 'all'}">View All</button>
    <button @click="updateFilter('completed')" :class="{active: current === 'completed'}">Completed</button>
    <button @click="updateFilter('incomplete')" :class="{active: current === 'incomplete'}">Incomplete</button>
  </nav>
</template>

<script>
export default {
  props : ['current'],
    methods: {
        updateFilter(by){
            this.$emit('filterChange',by)
        }  
    },

}
</script>


<style>
.filter-nav {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.filter-nav button {
  background-color: #00ce89;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.filter-nav button:hover {
  background-color: #00b379;
}
.filter-nav button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 206, 137, 0.5);
}
.filter-nav button.active {
    color: #555;
  }
</style>
