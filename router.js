// Importar el módulo 'express' para crear el enrutador
const express = require('express');

// Crear una instancia de un enrutador de Express
const router = express.Router();

// Importar la conexión a la base de datos desde el archivo './database/db'
const conexion = require('./database/db');

// Importar los métodos del controlador desde el archivo './controller/me'
const metodos = require('./controller/me');

// Ruta de inicio
router.get('/Inicio', (req, res) => {
    // Renderizar la vista 'index' (archivo index.ejs o similar)
    res.render('index');
});

// ÁREA CLIENTES

// Obtener todos los clientes en formato JSON
router.get('/Clientes', (req, res) => {
    // Ejecutar una consulta SQL para obtener todos los clientes
    conexion.query('SELECT * FROM clientes', (error, results) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Enviar los resultados en formato JSON como respuesta
        res.send(results);
    });
});

// Obtener todos los clientes y renderizar la vista correspondiente
router.get('/Cliente2', (req, res) => {
    // Ejecutar una consulta SQL para obtener todos los clientes
    conexion.query('SELECT * FROM clientes', (error, results) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'cliente/index' y pasar los datos de los clientes como contexto
        res.render('cliente/index', { clientes: results });
    });
});

// Mostrar formulario para crear un nuevo cliente
router.get('/crear', (req, res) => {
    // Renderizar la vista 'cliente/crear' (formulario de creación)
    res.render('cliente/crear');
});

// Guardar un nuevo cliente (la lógica se delega al método 'save' del controlador)
router.post('/save', metodos.save);

// Mostrar formulario para editar un cliente existente
router.get('/editar/:id', (req, res) => {
    // Obtener el ID del cliente desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el cliente con el ID especificado
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'cliente/editar' y pasar los datos del cliente como contexto
        res.render('cliente/editar', { cliente: resultado[0] });
    });
});

// Editar un cliente existente (la lógica se delega al método 'edit' del controlador)
router.post('/edit', metodos.edit);

// Mostrar formulario para eliminar un cliente existente
router.get('/eliminar/:id', (req, res) => {
    // Obtener el ID del cliente desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el cliente con el ID especificado
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'cliente/eliminar' y pasar los datos del cliente como contexto
        res.render('cliente/eliminar', { cliente: resultado[0] });
    });
});

// Eliminar un cliente existente (la lógica se delega al método 'delete' del controlador)
router.post('/delete', metodos.delete);

// Ver detalles de un cliente específico
router.get('/ver/:id', (req, res) => {
    // Obtener el ID del cliente desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el cliente con el ID especificado
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'cliente/ver' y pasar los datos del cliente como contexto
        res.render('cliente/ver', { cliente: resultado[0] });
    });
});

// ÁREA EMPLEADOS

// Ruta de empleados (solo mensaje de prueba)
router.get('/Empleados', (req, res) => {
    // Enviar un mensaje de prueba como respuesta
    res.send('Este es la ruta de Empleados');
});

// Obtener todos los empleados y renderizar la vista correspondiente
router.get('/Empleados2', (req, res) => {
    // Ejecutar una consulta SQL para obtener todos los empleados
    conexion.query('SELECT * FROM empleados', (error, results) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'empleado/index' y pasar los datos de los empleados como contexto
        res.render('empleado/index', { empleado: results });
    });
});

// Guardar un nuevo empleado (la lógica se delega al método 'saveEmpleados' del controlador)
router.post('/saveEmpleados', metodos.saveEmpleados);

// Mostrar formulario para crear un nuevo empleado
router.get('/creare', (req, res) => {
    // Renderizar la vista 'empleado/crear' (formulario de creación)
    res.render('empleado/crear');
});

// Mostrar formulario para editar un empleado existente
router.get('/editarE/:id', (req, res) => {
    // Obtener el ID del empleado desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el empleado con el ID especificado
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'empleado/editar' y pasar los datos del empleado como contexto
        res.render('empleado/editar', { empleado: resultado[0] });
    });
});

// Editar un empleado existente (la lógica se delega al método 'editEmpleados' del controlador)
router.post('/editEmpleados', metodos.editEmpleados);

// Mostrar formulario para eliminar un empleado existente
router.get('/eliminarE/:id', (req, res) => {
    // Obtener el ID del empleado desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el empleado con el ID especificado
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'empleado/eliminar' y pasar los datos del empleado como contexto
        res.render('empleado/eliminar', { empleado: resultado[0] });
    });
});

// Eliminar un empleado existente (la lógica se delega al método 'deleteEmpleados' del controlador)
router.post('/deleteEmpleados', metodos.deleteEmpleados);

// Ver detalles de un empleado específico
router.get('/verE/:id', (req, res) => {
    // Obtener el ID del empleado desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener el empleado con el ID especificado
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Renderizar la vista 'empleado/ver' y pasar los datos del empleado como contexto
        res.render('empleado/ver', { empleado: resultado[0] });
    });
});

// ÁREA IDIOMAS

// Obtener idiomas asociados a un empleado específico
router.get('/idioma/:id', (req, res) => {
    // Obtener el ID del empleado desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener los idiomas asociados al empleado
    conexion.query('SELECT * FROM idiomas WHERE codigoE = ?', [codigo], (error, resultadoI) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Ejecutar una consulta SQL para obtener los datos del empleado
        conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultadoE) => {
            if (error) {
                // Si hay un error, mostrarlo en la consola y detener la ejecución
                console.log(error);
                return;
            }
            // Renderizar la vista 'idiomas/index' y pasar los datos de los idiomas y el empleado como contexto
            res.render('idiomas/index', { idiomas: resultadoI, empleado: resultadoE[0] });
        });
    });
});

// Guardar un nuevo idioma (la lógica se delega al método 'saveIdiomas' del controlador)
router.post('/saveIdiomas', metodos.saveIdiomas);

// Mostrar formulario para crear un nuevo idioma asociado a un empleado
router.get('/crearI/:id', (req, res) => {
    // Obtener el ID del empleado desde los parámetros de la URL
    const codigo = req.params.id;
    // Ejecutar una consulta SQL para obtener los datos del empleado
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultadoE) => {
        if (error) {
            // Si hay un error, mostrarlo en la consola y detener la ejecución
            console.log(error);
            return;
        }
        // Ejecutar una consulta SQL para obtener todos los idiomas
        conexion.query('SELECT * FROM idiomas', (error, resultadoI) => {
            if (error) {
                // Si hay un error, mostrarlo en la consola y detener la ejecución
                console.log(error);
                return;
            }
            // Renderizar la vista 'idiomas/crear' y pasar los datos del empleado y los idiomas como contexto
            res.render('idiomas/crear', { empleado: resultadoE[0], idiomas: resultadoI });
        });
    });
});

// Editar un idioma existente (la lógica se delega al método 'editIdiomas' del controlador)
router.post('/editIdiomas', metodos.editIdiomas);

// Eliminar un idioma existente (la lógica se delega al método 'deleteIdiomas' del controlador)
router.post('/deleteIdiomas', metodos.deleteIdiomas);

// Exportar el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;