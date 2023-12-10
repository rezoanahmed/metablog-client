// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqdF1Iofz0OnYIlGnccJ7ABdqkVURgzbM",
  authDomain: "metabl0g.firebaseapp.com",
  projectId: "metabl0g",
  storageBucket: "metabl0g.appspot.com",
  messagingSenderId: "278610961431",
  appId: "1:278610961431:web:7c643795e08f6193e56852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
