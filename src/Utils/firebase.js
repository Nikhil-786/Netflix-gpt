// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqEszhNL_dLqofti8kdIjPMu8oZrRmCdw",
  authDomain: "netflix-gpt-166a1.firebaseapp.com",
  projectId: "netflix-gpt-166a1",
  storageBucket: "netflix-gpt-166a1.firebasestorage.app",
  messagingSenderId: "884408876096",
  appId: "1:884408876096:web:7ce367dd40558686de33a5",
  measurementId: "G-TPR5B736C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();