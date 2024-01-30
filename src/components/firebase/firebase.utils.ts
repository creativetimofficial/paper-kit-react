// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xP9BfR13xE0xYJiv7N30OwXgPoBgF1M",
  authDomain: "systentando-static-ui.firebaseapp.com",
  projectId: "systentando-static-ui",
  storageBucket: "systentando-static-ui.appspot.com",
  messagingSenderId: "379565305349",
  appId: "1:379565305349:web:bb914169179819d84bb66c",
  measurementId: "G-9R7MSGEJ29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);