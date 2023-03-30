import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // firestore modülü
import { getAuth } from "firebase/auth"; // auth modülü

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk0EDj8x11NOk4cyC7nGZdlcFS1Nbf0uM",
  authDomain: "netflix-clone-bc70f.firebaseapp.com",
  projectId: "netflix-clone-bc70f",
  storageBucket: "netflix-clone-bc70f.appspot.com",
  messagingSenderId: "73227559967",
  appId: "1:73227559967:web:573ee60c38e146dd10a12a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // firestore nesnesi
const auth = getAuth(firebaseApp); // auth nesnesi

export { auth };
export default db;
