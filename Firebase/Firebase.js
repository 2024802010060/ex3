// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHWCeF7JB7IgZvmtIF3VtDO2zbLHkQX0",
  authDomain: "test-dc499.firebaseapp.com",
  projectId: "test-dc499",
  storageBucket: "test-dc499.appspot.com",
  messagingSenderId: "1034587704077",
  appId: "1:1034587704077:web:451d13b286e2496c4c7e44",
  measurementId: "G-RR15DCMFK8"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };