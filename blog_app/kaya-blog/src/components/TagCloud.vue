<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag" class="pill">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags.js';

export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts);
    return {
      tags
    };
  }
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud .pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
.tag-cloud a {
  color: #050505;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
