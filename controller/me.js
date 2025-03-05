const conexion = require('../database/db');

exports.save=(req,res)=>{
    const nombre=(req.body.nombre);
    const apellido=(req.body.apellido);
    const edad=(req.body.edad);
    const telefono=(req.body.telefono);
    const ciudad=(req.body.ciudad);
}