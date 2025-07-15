// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChlr5lxGRTcbEiLzWDvMyCF_I-wLtkgDc",
  authDomain: "projectblog-40091.firebaseapp.com",
  projectId: "projectblog-40091",
  storageBucket: "projectblog-40091.firebasestorage.app",
  messagingSenderId: "849344658781",
  appId: "1:849344658781:web:b29086796b2a8126c7bcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}