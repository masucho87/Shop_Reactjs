// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importar Firestore

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA07Pax6XE6QLgLWcXUo8NJHPTqzN7b0ho",
  authDomain: "altoqueperro-e3fc5.firebaseapp.com",
  projectId: "altoqueperro-e3fc5",
  storageBucket: "altoqueperro-e3fc5.appspot.com",
  messagingSenderId: "582512825659",
  appId: "1:582512825659:web:15128fe44fefb25f21d31e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app); // Crear una instancia de Firestore usando el objeto `app`

// Exportar `db` para usarlo en otros archivos
export { db, app };
