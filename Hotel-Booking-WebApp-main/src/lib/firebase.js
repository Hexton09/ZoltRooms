import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };
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
