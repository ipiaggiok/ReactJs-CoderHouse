// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaKtnjcvRxIKxyOlQhT4nuQmfztlJJ94o",
  authDomain: "reactjs-coderhouse-cb480.firebaseapp.com",
  projectId: "reactjs-coderhouse-cb480",
  storageBucket: "reactjs-coderhouse-cb480.appspot.com",
  messagingSenderId: "745530629510",
  appId: "1:745530629510:web:8d385c637113833bf06007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
