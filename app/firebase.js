// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZx9I5Lrrjny-rbNC1saKsmU34vUCPcp4",
  authDomain: "instagram-clone-3ec1e.firebaseapp.com",
  projectId: "instagram-clone-3ec1e",
  storageBucket: "instagram-clone-3ec1e.appspot.com",
  messagingSenderId: "208853446950",
  appId: "1:208853446950:web:b18f0b4213cd830b83d1e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();