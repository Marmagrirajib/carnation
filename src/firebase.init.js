// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgsa58n5L4GsnDrMsSCtoBSptCgg_8D3o",
    authDomain: "car-shop-c0ea2.firebaseapp.com",
    projectId: "car-shop-c0ea2",
    storageBucket: "car-shop-c0ea2.appspot.com",
    messagingSenderId: "943189736986",
    appId: "1:943189736986:web:4b1b23434a02372eb3dba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;