/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmc9hOdYyP72NCQxSRuh7VyuDgDSJU6-c",
  authDomain: "blogs-30538.firebaseapp.com",
  projectId: "blogs-30538",
  storageBucket: "blogs-30538.appspot.com",
  messagingSenderId: "28961120260",
  appId: "1:28961120260:web:7576e1b69890e7a153d551",
  measurementId: "G-T21SK9GQT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imageDb = getStorage(app);


