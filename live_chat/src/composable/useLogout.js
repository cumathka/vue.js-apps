import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout =async () => {
error.value = null

try {
    await projectAuth.signOut()
} catch (error) {
    console.log(error.message);
    error.value = error.message;
}
}


const useLogout = () => {


    return {logout ,error}
}

    export default useLogout;  // export default useLogout; 