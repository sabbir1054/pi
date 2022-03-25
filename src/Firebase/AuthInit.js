import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const AuthInitialization = () => {
  initializeApp(firebaseConfig);
};

export default AuthInitialization;
