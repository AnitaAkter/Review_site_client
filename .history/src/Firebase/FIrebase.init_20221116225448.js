// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: "assignment-11-final-49f20.appspot.com",
    messagingSenderId: "377238685999",
    appId: "1:377238685999:web:c2ba904c85f7f268d279da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app