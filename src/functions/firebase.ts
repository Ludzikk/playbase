import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDtl6cdmiwJSOURDGOQFB_EAKpvJW3s4ZA",
  authDomain: "playbase-d270a.firebaseapp.com",
  projectId: "playbase-d270a",
  storageBucket: "playbase-d270a.firebasestorage.app",
  messagingSenderId: "625255147174",
  appId: "1:625255147174:web:a8e9d21c6c794ad0407667"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}