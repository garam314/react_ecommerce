import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import product from './JSON_product.json'

const firebaseConfig = {
  apiKey: "AIzaSyAitvrPXaxf8akUGCP33IwMB5BZp7VYy90",
  authDomain: "e-commerce-dtapia.firebaseapp.com",
  projectId: "e-commerce-dtapia",
  storageBucket: "e-commerce-dtapia.appspot.com",
  messagingSenderId: "966516264175",
  appId: "1:966516264175:web:e8da2f5aef7e4446e5df1a"
};


initializeApp(firebaseConfig);

const db = getFirestore();
const productsCollection = collection(db, 'Products');


export const insertData = async () => {

  product.map((item) => {
    try {
      const docRef = addDoc(productsCollection, item);
      console.log('Documento agregado con ID:', docRef.id);
    } catch (error) {
      console.error('Error al agregar el documento:', error);
    }
  })
}