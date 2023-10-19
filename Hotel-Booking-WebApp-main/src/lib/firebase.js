import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "Domain",
  databaseURL: "DatabaseURl",
  projectId: "projectID",
  storageBucket: "Bucket",
  messagingSenderId: "ID",
  appId: "appID",
  measurementId: "ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
