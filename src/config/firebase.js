// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWlEBC6w2uCXfnRvRnAqb5CTh1EGxpbTA",
  authDomain: "blogsapp-a1316.firebaseapp.com",
  projectId: "blogsapp-a1316",
  storageBucket: "blogsapp-a1316.appspot.com",
  messagingSenderId: "847532690881",
  appId: "1:847532690881:web:aa81230876aa20bbdd3340",
  measurementId: "G-YPD48EFCYN"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
