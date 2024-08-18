// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt5vbdO8qXI7XuXrH-j8F_KUNEs29PDvs",
  authDomain: "food-ordering-website-omkeshri.firebaseapp.com",
  projectId: "food-ordering-website-omkeshri",
  storageBucket: "food-ordering-website-omkeshri.appspot.com",
  messagingSenderId: "377826709838",
  appId: "1:377826709838:web:fb1f0cf104176be3150e1f",
  measurementId: "G-NHPR3CMCJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);