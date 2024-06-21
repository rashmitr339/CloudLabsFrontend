
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh9IlnjjtpZEkPaKio9HRVpzSmEkk9n8s",
  authDomain: "cloudlab-9a6b1.firebaseapp.com",
  projectId: "cloudlab-9a6b1",
  storageBucket: "cloudlab-9a6b1.appspot.com",
  messagingSenderId: "653017126261",
  appId: "1:653017126261:web:1a05b469ec9ffa13bc6f3c",
  measurementId: "G-W1VFW9MXJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);