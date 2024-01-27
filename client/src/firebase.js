// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87c3f.firebaseapp.com",
  projectId: "mern-estate-87c3f",
  storageBucket: "mern-estate-87c3f.appspot.com",
  messagingSenderId: "934606094719",
  appId: "1:934606094719:web:4e8115b44552964ed71a4a",
  measurementId: "G-5J6E2QMPWP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
