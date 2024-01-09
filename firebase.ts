// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAlUCEH81ro-_-Q_kvE9kls4Ofmh1d-t0",
  authDomain: "netflix-clone-fe100.firebaseapp.com",
  projectId: "netflix-clone-fe100",
  storageBucket: "netflix-clone-fe100.appspot.com",
  messagingSenderId: "492078421603",
  appId: "1:492078421603:web:6f8bbd88ce24ab1d608a56",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
