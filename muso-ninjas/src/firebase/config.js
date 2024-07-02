import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiosbW-_nlZbLCzjwhae0SSjGefimk0S4",
  authDomain: "music-fav-app.firebaseapp.com",
  databaseURL: "https://music-fav-app-default-rtdb.firebaseio.com",
  projectId: "music-fav-app",
  storageBucket: "music-fav-app.appspot.com",
  messagingSenderId: "846088430595",
  appId: "1:846088430595:web:4e1b76aa295d843d915a36",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// projects storege
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
