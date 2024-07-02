import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAKRU4fZyBFU2_ZIlv4oa-gYD4sr-VRCU",
  authDomain: "app-blog-bd16a.firebaseapp.com",
  projectId: "app-blog-bd16a",
  storageBucket: "app-blog-bd16a.appspot.com",
  messagingSenderId: "79339503010",
  appId: "1:79339503010:web:37cc34dbca67018ea406fb",
  measurementId: "G-Q1P1NB91HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Exporting db and serverTimestamp for use in other parts of the app
export { db, serverTimestamp };
