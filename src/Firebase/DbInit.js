import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
import { getFirestore } from "firebase/firestore";


const DbInitialization = () => {
  initializeApp(firebaseConfig);
};

export default DbInitialization;

//init firestore

export const db = getFirestore(initializeApp(firebaseConfig));
