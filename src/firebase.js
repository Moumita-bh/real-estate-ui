// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhizm40I1yIORA67mVSwYY_-g1jaarnuY",
  authDomain: "realestateapp-3733d.firebaseapp.com",
  projectId: "realestateapp-3733d",
  storageBucket: "realestateapp-3733d.firebasestorage.app",
  messagingSenderId: "501788402557",
  appId: "1:501788402557:web:1c726bb05e40ca82c96214",
  measurementId: "G-ZHNDFS00FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };