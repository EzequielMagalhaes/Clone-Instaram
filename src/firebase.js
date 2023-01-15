import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBXdV7-Z-OW5KpZGHKmRGtbUJAkGIiMKI",
  authDomain: "instagram-clone-zeke.firebaseapp.com",
  projectId: "instagram-clone-zeke",
  storageBucket: "instagram-clone-zeke.appspot.com",
  messagingSenderId: "179288860274",
  appId: "1:179288860274:web:2482798f6c632f120e04eb",
  measurementId: "G-47JQH1MLZ0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);