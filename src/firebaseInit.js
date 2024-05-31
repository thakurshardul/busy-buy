// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpQjZAkqubDaMSutQ6tw9KWvRSxSF-Atc",
  authDomain: "busybuy-6e0cf.firebaseapp.com",
  databaseURL: "https://busybuy-6e0cf.asia-southeast1.firebasedatabase.app/",
  projectId: "busybuy-6e0cf",
  storageBucket: "busybuy-6e0cf.appspot.com",
  messagingSenderId: "853840591977",
  appId: "1:853840591977:web:57f17ab6ef99cfef63f6f8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);