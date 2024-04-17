// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQrTMSPRm95WFDw78n4v4h95N3H0Bus-M",
    authDomain: "netflix-clone-57fed.firebaseapp.com",
    projectId: "netflix-clone-57fed",
    storageBucket: "netflix-clone-57fed.appspot.com",
    messagingSenderId: "310727579671",
    appId: "1:310727579671:web:a7c512e9291affc9686452",
    measurementId: "G-VWQ8K5VF26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
