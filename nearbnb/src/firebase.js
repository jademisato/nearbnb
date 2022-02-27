// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8RtusJ6znoD77R8dGCx6WZizN8ONoJiY",
  authDomain: "nearbnb-31341.firebaseapp.com",
  projectId: "nearbnb-31341",
  storageBucket: "nearbnb-31341.appspot.com",
  messagingSenderId: "626902569388",
  appId: "1:626902569388:web:84a1353cd14f6544366a09",
  measurementId: "G-9QQK6LL30M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);