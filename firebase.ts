// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAtvUZLeMEKYQC-sWFnBfvATtDnLJtgyE",
  authDomain: "titletabpage.firebaseapp.com",
  projectId: "titletabpage",
  storageBucket: "titletabpage.appspot.com",
  messagingSenderId: "959769645442",
  appId: "1:959769645442:web:757d743460e81fdd747f9b",
  measurementId: "G-KCG4XB2KR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);