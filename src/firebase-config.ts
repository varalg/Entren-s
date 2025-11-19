// src/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
  apiKey: "AIzaSyDDGtBQRQMtUzp7AVIGcKEHr8gvi_MeLdY",
  authDomain: "entrenos-e66c3.firebaseapp.com",
  projectId: "entrenos-e66c3",
  storageBucket: "entrenos-e66c3.firebasestorage.app",
  messagingSenderId: "450739736566",
  appId: "1:450739736566:web:5f81b10dd5d12251de01d7",
  measurementId: "G-53QXRWMVF3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);           // Autenticação
const functions = getFunctions(app); // Funções (ex: enviar e-mail)
const db = getFirestore(app);        // Banco de dados
const analytics = getAnalytics(app); // Analytics

export { app, auth, functions, db, analytics };
