// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFsNppyzeqKgmRgc1S4if3vRxanBnMJxw",
  authDomain: "ehya-articles.firebaseapp.com",
  projectId: "ehya-articles",
  storageBucket: "ehya-articles.appspot.com",
  messagingSenderId: "770873042495",
  appId: "770873042495:web:f25b86c019a445e74d7a8a",
  /* apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
