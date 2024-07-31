// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estste-1ab0f.firebaseapp.com",
  projectId: "mern-estste-1ab0f",
  storageBucket: "mern-estste-1ab0f.appspot.com",
  messagingSenderId: "144603822058",
  appId: "1:144603822058:web:f6d42d947711d660cfe493",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
