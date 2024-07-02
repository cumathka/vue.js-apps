import { ref } from 'vue'


const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      })
      let response = await fetch("http://localhost:8081/posts");
      if (!response.ok) {
        throw Error(`Error: ${response.status} ${response.statusText}`);
      } else {
        posts.value = await response.json();
      }
    } catch (err) {
      error.value = err.message;
      console.error("Fetch error:", err.message);
    }
  };

  return {
    posts,
    error,
    load,
  }
};

export default getPosts ;
