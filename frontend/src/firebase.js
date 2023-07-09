import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbpe-cASt3cJHiNZ2KqJ8Wa3M60t7SIk4",
  authDomain: "web-template-d036c.firebaseapp.com",
  projectId: "web-template-d036c",
  storageBucket: "web-template-d036c.appspot.com",
  messagingSenderId: "321263672383",
  appId: "1:321263672383:web:5a73055a828e8c6f7eec8a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }