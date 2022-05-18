// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD07ghiLx_lZopDaMtQSqQ1f0yMvvN1Jq0",
  authDomain: "test-272605.firebaseapp.com",
  projectId: "test-272605",
  storageBucket: "test-272605.appspot.com",
  messagingSenderId: "688702146500",
  appId: "1:688702146500:web:a0d8da81a4511212c14691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
export const stotrage = getFirestore();