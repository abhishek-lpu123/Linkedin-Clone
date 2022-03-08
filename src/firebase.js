import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkRhBxWEUnYyfW305suJsnfzRN6gamLjc",
    authDomain: "linkedin-clone-d8aca.firebaseapp.com",
    projectId: "linkedin-clone-d8aca",
    storageBucket: "linkedin-clone-d8aca.appspot.com",
    messagingSenderId: "216974239537",
    appId: "1:216974239537:web:5729c0f73eaae4b2787210",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebaseApp.auth()

  export {auth};
  export default db;
  