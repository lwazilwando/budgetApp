// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD7_7oW1e3ErYW4Zzl_bahaOTNBcwc2L0A",
  authDomain: "budget-app-43537.firebaseapp.com",
  projectId: "budget-app-43537",
  storageBucket: "budget-app-43537.appspot.com",
  messagingSenderId: "846761768250",
  appId: "1:846761768250:web:756bd078934eb239eecc03",
  measurementId: "G-D5MQJBZ06J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth= getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};