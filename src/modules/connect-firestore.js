import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRWxbjhK7iaYu8OdL6TNVAov-truuoMLA",
  authDomain: "happy-wishes-web-app.firebaseapp.com",
  projectId: "happy-wishes-web-app",
  storageBucket: "happy-wishes-web-app.appspot.com",
  messagingSenderId: "815721671242",
  appId: "1:815721671242:web:feb8beeb13b648102e54b3",
  measurementId: "G-VJBJ75XFNK",
};

function connectFirestore() {
  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  return database;
}

export default connectFirestore;
