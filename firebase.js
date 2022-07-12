// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo7jPWQx_7cBLXXFfjTefsJB9-Eygpe5E",
  authDomain: "fakestagram-ff2f3.firebaseapp.com",
  projectId: "fakestagram-ff2f3",
  storageBucket: "fakestagram-ff2f3.appspot.com",
  messagingSenderId: "407598541653",
  appId: "1:407598541653:web:9a243893c8125d6ca45ddc"
};

// Initialize Firebase
const app = !getApps().legnth ? initializeApp(firebaseConfig) : getApp();
const db= getFirestore();
const storage = getStorage();

export { app, db, storage };