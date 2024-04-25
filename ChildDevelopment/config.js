import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { query, where } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAXS375fI718bv_69VgHMg1GF4yhi6EV8g",
    authDomain: "childdevelopmentapp.firebaseapp.com",
    projectId: "childdevelopmentapp",
    storageBucket: "childdevelopmentapp.appspot.com",
    messagingSenderId: "92096394078",
    appId: "1:92096394078:web:e3239a6fe348425abed5cf",
    measurementId: "G-W6DLDLRBE2"
  };

  if(! firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }
 
  export {firebase};