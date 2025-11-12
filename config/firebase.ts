import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9Phv_eU0Zwm6sobcJkmVOAGjXc-bnpUE",
  authDomain: "marina-massage-d5167.firebaseapp.com",
  projectId: "marina-massage-d5167",
  storageBucket: "marina-massage-d5167.firebasestorage.app",
  messagingSenderId: "23398961355",
  appId: "1:23398961355:web:1dbb22427d75773ad6cb4e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);