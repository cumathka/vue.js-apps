import { projectAuth } from "../firebase/config";
import { ref } from "vue";




const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user)=>{
    console.log(_user);
user.value = _user
})

const getuser = () => {
    return { user }
}


export default getuser;  //exporting the function getuser which returns the user object.