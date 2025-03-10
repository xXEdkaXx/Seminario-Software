const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const metodos = require('./controller/me');
const e = require('express');

router.get('/Inicio',(req,res)=>{
    res.render('index');
});

//ÁREA CLIENTES
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
        } else {
            res.render('cliente/index', { clientes: results });
        }
    });
});

router.get('/crear', (req, res) => {
    res.render('cliente/crear');
});

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

router.get('/ver/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('cliente/ver', { cliente: resultado[0] });
    });
});

//ÁREA EMPLEADOS
router.get('/Empleados', (req, res) => {
    res.send('Este es la ruta de Empleados')
});

router.get('/Empleados2', (req, res) => {
    conexion.query('SELECT * FROM empleados', (error, results) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.render('empleado/index', { empleado: results });
        }
    });
});

router.post('/saveEmpleados', metodos.saveEmpleados);

router.get('/creare', (req, res) => {
    res.render('empleado/crear');
});

router.get('/editarE/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('empleado/editar', { empleado: resultado[0] });
    });
});

router.post('/editEmpleados', metodos.editEmpleados);

router.get('/eliminarE/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('empleado/eliminar', { empleado: resultado[0] });
    });
});

router.post('/deleteEmpleados', metodos.deleteEmpleados);

router.get('/verE/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        }
        res.render('empleado/ver', { empleado: resultado[0] });
    });
});


//IDIOMAS
router.get('/idioma/:id', (req,res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM idiomas WHERE codigoE = ?', [codigo], (error, resultadoI) => {
        if (error) {
            console.log(error);
            return;
        }
        conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultadoE) => {
            if (error) {
                console.log(error);
                return;
            } 
            res.render('idiomas/index', { idiomas: resultadoI, empleado:resultadoE[0] });
        });   
    });
});

router.post('/saveIdiomas', metodos.saveIdiomas);

router.get('/crearI/:id', (req, res) => {
    const codigo = req.params.id; 
    conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [codigo], (error, resultadoE) => {
        if (error) {
            console.log(error); 
            return;
        }
        conexion.query('SELECT * FROM idiomas', (error, resultadoI) => {
            if (error) {
                console.log(error); 
                return;
            }
            res.render('idiomas/crear', {empleado: resultadoE[0], idiomas: resultadoI});
        });
    });
});

router.post('/editIdiomas', metodos.editIdiomas);

router.get('/EditarI/:id', (req, res) => {
    const codigo = req.params.id;  
    conexion.query('SELECT * FROM idiomas WHERE codigoI = ?', [codigo], (error, resultadoI) => {
        if (error) {
            console.log(error);
            return;
        }
        conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [resultadoI[0].codigoE], (error, resultadoE) => {
            if (error) {
                console.log(error);
                return;
            }

            res.render('idiomas/editar', { idiomas: resultadoI[0], empleado: resultadoE[0] });
        });
    });
});

router.post('/deleteIdiomas', metodos.deleteIdiomas);

router.get('/eliminarI/:id', (req, res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM idiomas WHERE codigoI = ?', [codigo], (error, resultadoI) => {
        if (error) {
            console.log(error);
            return;
        }
        conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [resultadoI[0].codigoE], (error, resultadoE) => {
            if (error) {
                console.log(error);
                return;
            }

            res.render('idiomas/eliminar', { idiomas: resultadoI[0], empleado: resultadoE[0] });
        });
    });
});

router.get('/VerI/:id', (req, res) => {
    const codigo = req.params.id;  
    conexion.query('SELECT * FROM idiomas WHERE codigoI = ?', [codigo], (error, resultadoI) => {
        if (error) {
            console.log(error);
            return;
        }
        conexion.query('SELECT * FROM empleados WHERE codigoE = ?', [resultadoI[0].codigoE], (error, resultadoE) => {
            if (error) {
                console.log(error);
                return;
            }

            res.render('idiomas/ver', { idiomas: resultadoI[0], empleado: resultadoE[0] });
        });
    });
});
module.exports = router; 