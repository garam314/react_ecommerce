import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAitvrPXaxf8akUGCP33IwMB5BZp7VYy90",
  authDomain: "e-commerce-dtapia.firebaseapp.com",
  projectId: "e-commerce-dtapia",
  storageBucket: "e-commerce-dtapia.appspot.com",
  messagingSenderId: "966516264175",
  appId: "1:966516264175:web:e8da2f5aef7e4446e5df1a"
};


initializeApp(firebaseConfig);

export const getAllProducts = async () => {
  const db = getFirestore();
  const refCollection = collection(db, "Products");

  try {
    const querySnapshot = await getDocs(refCollection);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length === 0) {
      console.log("No hay resultados.");
    }

    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};


export const getProduct = async (id_product) => {
  const db = getFirestore();
  const refDocs = collection(db, "Products");

  const filtered = query(refDocs, where("id", "==", id_product))
  try {
    const querySnapshot = await getDocs(filtered);
    const documents = querySnapshot.docs.map((doc) => doc.data());
    return documents;
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    throw error;
  }
};