import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const postsCollection = collection(db, "posts");
      const postsQuery = query(postsCollection, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(postsQuery);
      posts.value = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
