# firebase_backend
Archivo de configuración para conectar frontend HTML a Firebase (Backend)

# Conexión de Formulario HTML a Firebase Realtime Database

 Mi contribución al proyecto: https://github.com/AngelLarios23/TNT_SEGURIDAD 
Fecha de desarrollo**: [06/2025]  
Tecnologías**: JavaScript, Firebase SDK v11.8.1

Descripción: 
Mi aporte a este proyecto fue crear el archivo de configuración backend (`backend.js`) que conecta el formulario HTML (app.html) con Firebase Realtime Database, permitiendo:
- Autenticación con Firebase
- Almacenamiento seguro de credenciales de usuario
- Manejo de errores en tiempo real

Para utilizar este código lo único que debes hacer es: 

1. Reemplaza las credenciales en `firebaseConfig` por las de tu proyecto Firebase:
   ```javascript
   const firebaseConfig = {
     apiKey: "TU_API_KEY",
     authDomain: "TU_DOMAIN.firebaseapp.com"

2. Añadir un scrip similar a este "<script type="module" src="./backend.js"></script>" casi al final de tu archivo html justo antes de cerrar el </body> " </body> "  para conectar el back con el front 

3. Habilita Realtime Database en la consola de Firebase.

 Funcionalidades implementadas:
- Event Listener para submit del formulario

- Captura de datos (username/password)

- Conexión asíncrona con Firebase
