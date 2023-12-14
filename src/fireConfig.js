import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCCudenUBuGnsPNi9XtYvOQ47baRjWnJwg",
    authDomain: "pulper01.firebaseapp.com",
    projectId: "pulper01",
    storageBucket: "pulper01.appspot.com",
    messagingSenderId: "597595273982",
    appId: "1:597595273982:web:c0afcd03c4b9f039a943af"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
