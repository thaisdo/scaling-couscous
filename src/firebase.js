import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyGUmfbtY6iWofBB_7dOZ8IDF-skWnVgw",
  authDomain: "website-b9c42.firebaseapp.com",
  projectId: "website-b9c42",
  storageBucket: "website-b9c42.appspot.com",
  messagingSenderId: "230000859598",
  appId: "1:230000859598:web:b6ac89bccced97f23af39f",
  measurementId: "G-V5KGGNPG08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
