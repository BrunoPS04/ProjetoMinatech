import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5IQ4ktg690LNJTL2ayZTtzcfT9vzE2WY",
  authDomain: "minatech-6e4f1.firebaseapp.com",
  projectId: "minatech-6e4f1",
  storageBucket: "minatech-6e4f1.firebasestorage.app",
  messagingSenderId: "503378032743",
  appId: "1:503378032743:web:8738d2c5effdda906017cc2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);