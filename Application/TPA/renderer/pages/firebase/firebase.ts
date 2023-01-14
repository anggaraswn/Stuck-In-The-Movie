// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxDIOlycJr3Kf0SL_dsfcKe9XkRPAOAPw",
  authDomain: "tpa-desktop-b6ee0.firebaseapp.com",
  projectId: "tpa-desktop-b6ee0",
  storageBucket: "tpa-desktop-b6ee0.appspot.com",
  messagingSenderId: "747158830027",
  appId: "1:747158830027:web:90d7e865f2b6f13589544e",
  measurementId: "G-6VW4VBRK54"
};

// Initialize Firebase
export const app =  firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
