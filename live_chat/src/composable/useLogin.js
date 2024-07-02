import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(res);
    return res ;
  } catch (err) {
     error.value = 'Incorrect login credentials' 
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin; //exporting the useLogin function to be used in other components.
