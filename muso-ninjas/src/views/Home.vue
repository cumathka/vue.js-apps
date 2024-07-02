<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <ListItem :playlists="documents" />
    </div>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  components: { ListItem },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>