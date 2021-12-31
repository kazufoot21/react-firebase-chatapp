// import firebase from 'firebase/app';   compatいる

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBo4fSgdUveWOadeSkvekdo20nGU4UqLnA',
  authDomain: 'react-firebase-chatapp-70a01.firebaseapp.com',
  projectId: 'react-firebase-chatapp-70a01',
  storageBucket: 'react-firebase-chatapp-70a01.appspot.com',
  messagingSenderId: '509132265264',
  appId: '1:509132265264:web:f25a1e4db5855153415af5',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
