<template>
    <div class="user-playlists">
      <h2>My Playlists</h2>
      <div v-if="playlists">
        <ListItem :playlists="playlists" />
      </div>
      <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a New Playlist</router-link>
    </div>
  </template>
  
  <script>
  import getUser from '@/composables/getUser'
  import getCollection from '@/composables/getCollection'
  import ListItem from '@/components/ListItem.vue'
  
  export default {
    components: { ListItem },
    setup() {
      const { user } = getUser()
      const { documents: playlists } = getCollection(
        'playlists', 
        ['userId', '==', user.value.uid]
      )
  
      return { playlists }
    }
  }
  </script>
  
  <style scoped>
    h2 {
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 1px solid var(--secondary)
    }
    .btn {
      margin-top: 20px;
    }
  </style>