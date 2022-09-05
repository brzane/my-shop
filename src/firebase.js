import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaI7ZDceMjg6fqLvvkzbicT6Bb1ajQejI",
  authDomain: "myshop-4f9b4.firebaseapp.com",
  projectId: "myshop-4f9b4",
  storageBucket: "myshop-4f9b4.appspot.com",
  messagingSenderId: "35622541323",
  appId: "1:35622541323:web:1d6d7f1c93bce8dfc94f0e",
  measurementId: "G-QCXMRQ5615",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

export { db ,auth};
