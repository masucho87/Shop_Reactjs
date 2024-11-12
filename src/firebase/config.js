// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA07Pax6XE6QLgLWcXUo8NJHPTqzN7b0ho",
  authDomain: "altoqueperro-e3fc5.firebaseapp.com",
  projectId: "altoqueperro-e3fc5",
  storageBucket: "altoqueperro-e3fc5.appspot.com",
  messagingSenderId: "582512825659",
  appId: "1:582512825659:web:15128fe44fefb25f21d31e"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 


export { db, app };
