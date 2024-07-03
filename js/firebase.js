// Import the functions you need from the SDKs you need
import { initializeApp, getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Include Firebase SDKs directly within firebase.js
// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
// Firebase Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";
// Firebase Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMqYuJFrlRxLHTDxeKlk5XVdQ9GmJIdtQ",
    authDomain: "portfolio-500.firebaseapp.com",
    projectId: "portfolio-500",
    storageBucket: "portfolio-500.appspot.com",
    messagingSenderId: "328391126428",
    appId: "1:328391126428:web:1df08f6567e0c15d632c59",
    measurementId: "G-8N9M1VZCGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firebase modules for use in other files
export { app, auth, firestore, analytics };
