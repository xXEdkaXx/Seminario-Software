// Importar el módulo 'express' para crear el servidor web
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el motor de plantillas EJS para renderizar vistas
// EJS permite generar HTML dinámico en el servidor
app.set('view engine', 'ejs');

// Middleware para procesar datos enviados desde formularios HTML
// Los datos se parsean y se hacen accesibles en req.body
// extended: false indica que se usa la librería 'querystring' para parsear los datos
app.use(express.urlencoded({ extended: false }));

// Middleware para procesar datos enviados en formato JSON (por ejemplo, desde una API REST)
// Los datos se parsean y se almacenan en req.body
app.use(express.json());

// Usar un enrutador externo para manejar las rutas que comienzan con '/'
// El enrutador se define en el archivo './router'
app.use('/', require('./router'));

// Iniciar el servidor en el puerto 5000
// Cuando el servidor esté listo, se ejecutará la función de callback
app.listen(5000, () => {
    console.log('Servidor Local http://localhost:5000/Inicio'); // Mensaje en la consola
});