const conexion = require('../database/db');

exports.save = (req, res) => {
    const nombre = (req.body.nombre);
    const apellido = (req.body.apellido);
    const edad = (req.body.edad);
    const telefono = (req.body.telefono);
    const ciudad = (req.body.ciudad);

    conexion.query('INSERT INTO clientes SET ?', { nombre: nombre, apellido: apellido, edad: edad, telefono: telefono, ciudad: ciudad }, (error) => {
        if (error) {
            console.log(error);
        }
        else {
            res.redirect('/Cliente2');
        }
    });
}