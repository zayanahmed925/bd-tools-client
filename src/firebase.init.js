// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmpb3Dtj3gc4nKLR6xAyg7lt9mqeaCo9c",
    authDomain: "bd-tools-d0f55.firebaseapp.com",
    projectId: "bd-tools-d0f55",
    storageBucket: "bd-tools-d0f55.appspot.com",
    messagingSenderId: "226025312115",
    appId: "1:226025312115:web:95476e195a51bf03d27f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;