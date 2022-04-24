//import firebase from "firebase";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBiEaw_UsiZdaSuy4o5HmAB2aE-nYgCrB4",
    authDomain: "robinhood-65b8e.firebaseapp.com",
    projectId: "robinhood-65b8e",
    storageBucket: "robinhood-65b8e.appspot.com",
    messagingSenderId: "721998566747",
    appId: "1:721998566747:web:1cdb4d5b628cdf0c29367e"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export { db } ;