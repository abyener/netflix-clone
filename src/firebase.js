import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk0EDj8x11NOk4cyC7nGZdlcFS1Nbf0uM",
  authDomain: "netflix-clone-bc70f.firebaseapp.com",
  projectId: "netflix-clone-bc70f",
  storageBucket: "netflix-clone-bc70f.appspot.com",
  messagingSenderId: "73227559967",
  appId: "1:73227559967:web:573ee60c38e146dd10a12a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
