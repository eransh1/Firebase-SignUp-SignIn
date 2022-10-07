import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {API_Key,AUTH_DOMAIN} from "./apikey"

const firebaseConfig = {
    apiKey: API_Key,
    authDomain:AUTH_DOMAIN,
    projectId: "react-authentication-4c81a",
    storageBucket: "react-authentication-4c81a.appspot.com",
    messagingSenderId: "47922684269",
    appId: "1:47922684269:web:b9cc5cf032a05b3ccefa64",
    measurementId: "G-FXK7NFC0X5"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)