import {  APIKEY,AUTHDOMAIN ,PROJECTID ,STORAGEBUCKET ,MESSAGING_SENDER_ID,APP_ID,MEASUREMENT_ID} from "@env"

  
import firebase from "firebase";

const firebaseConfig = {
    apiKey:  APIKEY,
    authDomain:  AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };


  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;