import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCt3rLb69hO4c3S1861av0MmnfWciu-gio",
    authDomain: "clone-af06b.firebaseapp.com",
    databaseURL: "https://clone-af06b.firebaseio.com",
    projectId: "clone-af06b",
    storageBucket: "clone-af06b.appspot.com",
    messagingSenderId: "472603669350",
    appId: "1:472603669350:web:c6bf03a0c1b15ea06acea7",
    measurementId: "G-18NFQTWWMG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };