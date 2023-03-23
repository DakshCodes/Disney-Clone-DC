import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import {storage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCl0Cr8PSyp0au1h-zafXa8sdor3d1tm_I",
  authDomain: "disney-daksh.firebaseapp.com",
  projectId: "disney-daksh",
  storageBucket: "disney-daksh.appspot.com",
  messagingSenderId: "1042482756870",
  appId: "1:1042482756870:web:95564ccad504782ed77287"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// const storagee=storage();
