import {  APIKEY,AUTHDOMAIN ,PROJECTID ,STORAGEBUCKET ,MESSAGING_SENDER_ID,APP_ID,MEASUREMENT_ID} from "@env"

  
import firebase from "firebase";

const firebaseConfig = {
    apiKey:  "AIzaSyCer53q6k8KPU6F5LZ_MkTGOPS7yt4gbdE",
    authDomain:  "uber-clone-336709.firebaseapp.com",
    projectId: "uber-clone-336709",
    storageBucket: "uber-clone-336709.appspot.com",
    messagingSenderId: "1050065178129",
    appId: "1:1050065178129:web:bd6b610744d61555feebb0",
    measurementId: "G-DVXRLXMZJ5"
  };


  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;