import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDgAn4OehtWHwVtCp9ISdJDWHaOZKK3GFk",
  authDomain: "tiktok-pro-46434.firebaseapp.com",
  projectId: "tiktok-pro-46434",
  storageBucket: "tiktok-pro-46434.firebasestorage.app",
  messagingSenderId: "634109089305",
  appId: "1:634109089305:web:85a8117ee997fd29a83c88",
  measurementId: "G-91T9CD8ERJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
