import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfRlKN9KKz6B94x4CrLbhVrcjrSq9PhR0",
  authDomain: "hexton09.firebaseapp.com",
  databaseURL: "https://hexton09-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hexton09",
  storageBucket: "hexton09.appspot.com",
  messagingSenderId: "565975418232",
  appId: "1:565975418232:web:f4accbed05dbc000f3b48d",
  measurementId: "G-LHY1CGD5KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
