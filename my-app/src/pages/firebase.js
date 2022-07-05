
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBD88u_iXNKIFGzaULTOX0TwfnMaMzKqGs",
  authDomain: "netflix-ed037.firebaseapp.com",
  projectId: "netflix-ed037",
  storageBucket: "netflix-ed037.appspot.com",
  messagingSenderId: "91954592196",
  appId: "1:91954592196:web:7a3159b6a57395ff9ecc91"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)