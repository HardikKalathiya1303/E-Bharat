// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDBRVFQSrbfU34S-Ztxqk__dge60JSx-s",
  authDomain: "react-ecomm-33f3a.firebaseapp.com",
  projectId: "react-ecomm-33f3a",
  storageBucket: "react-ecomm-33f3a.appspot.com",
  messagingSenderId: "200705954172",
  appId: "1:200705954172:web:255f3cc080e1afcd0c54f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}