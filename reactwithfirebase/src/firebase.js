// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDodcBG6PR43GHXve_SQwO8WADD7eIMD-U",
  authDomain: "app-a32a5.firebaseapp.com",
  projectId: "app-a32a5",
  storageBucket: "app-a32a5.appspot.com",
  messagingSenderId: "81975417235",
  appId: "1:81975417235:web:452cb41ce761dd29c57066",
  databaseURL: "https://app-a32a5-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);