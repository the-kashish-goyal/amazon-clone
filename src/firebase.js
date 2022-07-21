// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDHES4hbTwpcl2UlWIioBKb4ZVlk0Xx1FQ",
    authDomain: "challenge-ecec7.firebaseapp.com",
    projectId: "challenge-ecec7",
    storageBucket: "challenge-ecec7.appspot.com",
    messagingSenderId: "176042149467",
    appId: "1:176042149467:web:9a9de9fd9784558e17617e",
    measurementId: "G-9133H42HDE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };
