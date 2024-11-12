import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

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

  export { collection, addDoc };

  //falta agregardo a una funcion
  //Query a productos tipo Seco

  // const tipoS = query(collection(db,'productos'), where("Tipo", "==", seco) )
  
  // const querySeco = await getDocs(tipoS)
  // querySeco.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data())
  // })

  //   //Query a productos tipo Humedo

  //   const tipoH = query(collection(db,'productos'), where("Tipo", "==", humedo) )
  
  //   const queryHumedo = await getDocs(tipoH)
  //   queryHumedo.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data())
  //   })