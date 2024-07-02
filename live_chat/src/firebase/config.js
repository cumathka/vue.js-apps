// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyBAKRU4fZyBFU2_ZIlv4oa-gYD4sr-VRCU",
    authDomain: "app-blog-bd16a.firebaseapp.com",
    projectId: "app-blog-bd16a",
    storageBucket: "app-blog-bd16a.appspot.com",
    messagingSenderId: "79339503010",
    appId: "1:79339503010:web:37d52e123b4ac4a2a406fb",
    measurementId: "G-8T1TTP1ETH"
  };
// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
