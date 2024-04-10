import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDY9FDZgBY_DQUsY_Rzf-5MFzY08xPwe8Q",
  authDomain: "right-meet.firebaseapp.com",
  projectId: "right-meet",
  storageBucket: "right-meet.appspot.com",
  messagingSenderId: "734913776461",
  appId: "1:734913776461:web:fcfee0d515a86e58d88504",
  measurementId: "G-W3PMB748TN"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
