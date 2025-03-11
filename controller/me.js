const conexion = require('../database/db'); // Importa la conexión a la base de datos

// Cada `exports` define y expone una función que se puede usar en otras partes del proyecto.
// Estas funciones manejan operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) para diferentes entidades en la base de datos.
// Se usan en rutas donde se reciben solicitudes HTTP y se ejecutan consultas SQL.

// CLIENTES
exports.save = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    const ciudad = req.body.ciudad;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO clientes SET ?', { nombre, apellido, edad, telefono, ciudad }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/Cliente2'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.edit = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    const ciudad = req.body.ciudad;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE clientes SET ? WHERE codigo = ?', [{ nombre, apellido, edad, telefono, ciudad }, codigo], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Cliente2');
        }
    });
};

exports.delete = (req, res) => {
    const codigo = req.body.codigo; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM clientes WHERE codigo = ?', [codigo], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Cliente2');
        }
    });
};

// EMPLEADOS
exports.saveEmpleados = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const fechaC = req.body.fechaC;
    const sueldo = req.body.sueldo;
    const telefono = req.body.telefono;

    // Inserta un nuevo empleado en la base de datos
    conexion.query('INSERT INTO empleados SET ?', { nombre, apellido, edad, fechaC, sueldo, telefono }, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2');
        }
    });
};

exports.editEmpleados = (req, res) => {
    const codigoE = req.body.codigoE;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const fechaC = req.body.fechaC;
    const sueldo = req.body.sueldo;
    const telefono = req.body.telefono;

    // Actualiza los datos de un empleado según su código
    conexion.query('UPDATE empleados SET ? WHERE codigoE = ?', [{ nombre, apellido, edad, fechaC, sueldo, telefono }, codigoE], (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.redirect('/Empleados2');
        }
    });
};

exports.deleteEmpleados = (req, res) => {
    const codigoE = req.body.codigoE; // Código del empleado a eliminar

    // Elimina un empleado de la base de datos
    conexion.query('DELETE FROM empleados WHERE codigoE = ?', [codigoE], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2');
        }
    });
};

// IDIOMAS EMPLEADO
exports.saveIdiomas = (req, res) => {
    const codigoE = req.body.codigoE;
    const nombreI = req.body.nombreI;
    const tiempoI = req.body.tiempoI;

    // Inserta un nuevo idioma asociado a un empleado
    conexion.query('INSERT INTO idiomas SET ?', { codigoE, nombreI, tiempoI }, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2');
        }
    });
};

exports.editIdiomas = (req, res) => {
    const codigoI = req.body.codigoI;
    const codigoE = req.body.codigoE;
    const nombreI = req.body.nombreI;
    const tiempoI = req.body.tiempoI;

    // Actualiza un idioma asociado a un empleado según su código
    conexion.query('UPDATE idiomas SET ? WHERE codigoI = ?', [{ nombreI, tiempoI }, codigoI], (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.redirect('/Empleados2');
        }
    });
};

exports.deleteIdiomas = (req, res) => {
    const codigoI = req.body.codigoI; // Código del idioma a eliminar

    // Elimina un idioma de la base de datos
    conexion.query('DELETE FROM idiomas WHERE codigoI = ?', [codigoI], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2');
        }
    });
};