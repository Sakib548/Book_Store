// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_g1Fz4vaAsihumRFlX37UPBEtVUOtBEM",
  authDomain: "mern-book-inventory-42ec9.firebaseapp.com",
  projectId: "mern-book-inventory-42ec9",
  storageBucket: "mern-book-inventory-42ec9.appspot.com",
  messagingSenderId: "716849373142",
  appId: "1:716849373142:web:2251899494c50399790e77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
