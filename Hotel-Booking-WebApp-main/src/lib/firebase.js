import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "**********",
  authDomain: "**********",
  databaseURL: "**********",
  projectId: "**********",
  storageBucket: "**********",
  messagingSenderId: "**********",
  appId: "**********",
  measurementId: "**********"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
