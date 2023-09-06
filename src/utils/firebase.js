// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB92JkLU9P33BX0g42I6ibAUTsDGZgmhlo",
  authDomain: "flixgpt-f76b8.firebaseapp.com",
  projectId: "flixgpt-f76b8",
  storageBucket: "flixgpt-f76b8.appspot.com",
  messagingSenderId: "229543530382",
  appId: "1:229543530382:web:baab4244067e3df04d5edf",
  measurementId: "G-WHPH6VXTPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//-------------------------------------------------------

export const auth = getAuth(); //from signIn/SignUp page