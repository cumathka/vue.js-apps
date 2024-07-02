import {ref} from 'vue'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);
  
    const load = async () => {
      try {
        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        })

        let response = await fetch('http://localhost:8081/posts/'+id);
        if (!response.ok) {
          throw Error(`Error: ${response.status} ${response.statusText}`);
        } else {
          post.value = await response.json();
        }
      } catch (err) {
        error.value = err.message;
        console.error("Fetch error:", err.message);
      }
    };
  
    return {
      post,
      error,
      load,
    }
}

export default getPost ;

