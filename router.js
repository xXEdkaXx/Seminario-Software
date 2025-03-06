const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/Clientes', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, results) => {
        if (error) {
            console.log(error);
            return;
        }

        else {
            res.send(results);
        }
    });

});

router.get('/Cliente2', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, results) => {
        if (error) {
            console.log(error);
            return;
        }else {
            res.render('cliente/index', { clientes: results });
        }
    });
});

router.get('/crear', (req, res) => {
    res.render('cliente/crear');
});

const metodos = require('./controller/me');


router.post('/save', metodos.save);

router.get('/editar/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('cliente/editar', { cliente: resultado[0] });
    });
});

router.post('/edit', metodos.edit);

router.get('/eliminar/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('cliente/eliminar', { cliente: resultado[0] });
    });
});

router.post('/delete', metodos.delete);

router.get('/Empleados', (req, res) => {
    res.send('Este es la ruta de Empleados')
});

router.get('/Empleados2', (req, res) => {
    res.render('empleado/index')
});

module.exports = router; 