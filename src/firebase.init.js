// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjUGL6JD93s_lwQN0xf7Bz_yLaKD2Z_sU",
  authDomain: "ed-tech-55ea3.firebaseapp.com",
  projectId: "ed-tech-55ea3",
  storageBucket: "ed-tech-55ea3.appspot.com",
  messagingSenderId: "463519227908",
  appId: "1:463519227908:web:c6ed3b1279564f1fbb5551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;