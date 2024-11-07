// db.js
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app); // Define y exporta `db` aquí

export const getProductos = async () => {
  try {
    const productos = [];
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
    return productos; 
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

export const getOfertas = async () => {
    try {
      const ofertas = [];
      const querySnapshot = await getDocs(collection(db, "ofertas"));
      querySnapshot.forEach((doc) => {
        ofertas.push({ id: doc.id, ...doc.data() });
      });
      return ofertas; 
    } catch (error) {
      console.error("Error al obtener los ofertas:", error);
      throw error;
    }
  };
