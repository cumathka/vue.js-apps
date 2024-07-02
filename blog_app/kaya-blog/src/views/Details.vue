<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="deletePost" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost';
import { useRoute, useRouter } from 'vue-router';
import { db, serverTimestamp } from '../firebase/config'; // Import the configured db and serverTimestamp

// Component imports
import Spinner from '../components/Spinner.vue';
import { doc, deleteDoc, addDoc, collection } from 'firebase/firestore'; // Import Firestore functions

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { error, post, load } = getPost(route.params.id);

    load();

    const deletePost = async () => {
      try {
        await deleteDoc(doc(db, 'posts', props.id)); // Use Firestore functions
        router.push({ name: 'Home' });
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    };

    const addPost = async () => {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          title: 'New Post',
          body: 'This is the body of the new post',
          createdAt: serverTimestamp() // Use the serverTimestamp
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };

    return { error, post, deletePost, addPost };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>
