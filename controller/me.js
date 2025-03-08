const express = require('express');
const conexion = require('../database/db');

// CLIENTES
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

exports.edit = (req, res) => {
    const codigo = (req.body.codigo);
    const nombre = (req.body.nombre);
    const apellido = (req.body.apellido);
    const edad = (req.body.edad);
    const telefono = (req.body.telefono);
    const ciudad = (req.body.ciudad);

    conexion.query('UPDATE clientes SET ? WHERE codigo = ?', [{ nombre: nombre, apellido: apellido, edad: edad, telefono: telefono, ciudad: ciudad }, codigo], (error) => {
        if (error) {
            console.log(error);
        }
        else {
            res.redirect('/Cliente2');
        }
    });
}

exports.delete = (req, res) => {
    const codigo = (req.body.codigo);

    conexion.query('DELETE FROM clientes WHERE codigo = ?', [codigo], (error) => {
        if (error) {
            console.log(error);
        }
        else {
            res.redirect('/Cliente2');
        }
    });
}

//EMPLEADOS
exports.saveEmpleados = (req, res) => {
    const nombre = (req.body.nombre);
    const apellido = (req.body.apellido);
    const edad = (req.body.edad);
    const fechaC = (req.body.fechaC);
    const sueldo = (req.body.sueldo);
    const telefono = (req.body.telefono);

    conexion.query('INSERT INTO empleados SET ?', { nombre: nombre, apellido: apellido, edad: edad, fechaC: fechaC, sueldo: sueldo, telefono: telefono }, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2')
        }
    });
}

exports.editEmpleados = (req, res) =>{
    const codigoE = (req.body.codigoE);
    const nombre = (req.body.nombre);
    const apellido = (req.body.apellido);
    const edad = (req.body.edad);
    const fechaC = (req.body.fechaC);
    const sueldo = (req.body.sueldo);
    const telefono = (req.body.telefono);

    conexion.query('UPDATE empleados SET ? WHERE codigoE = ?', [{ nombre:nombre, apellido:apellido, edad:edad, fechaC:fechaC, sueldo:sueldo, telefono:telefono}, codigoE], (error) => {
        if (error){
            console.log(error);
            return;
        } else {
            res.redirect('/Empleados2')
        }
    });
}

exports.deleteEmpleados = (req, res) => {
    const codigoE = (req.body.codigoE);

    conexion.query('DELETE FROM empleados WHERE codigoE = ?', [codigoE], (error) => {
        if (error) {
            console.log(error);
        }
        else {
            res.redirect('/Empleados2');
        }
    });
}

//IDIOMA_EMPLEADO
exports.saveIdiomas = (req, res) => {
    const codigoE = (req.body.codigoE);
    const nombreI = (req.body.nombreI);
    const tiempoI  = (req.body.tiempoI);

    conexion.query('INSERT INTO idiomas  SET ?', { codigoE:codigoE, nombreI:nombreI, tiempoI:tiempoI}, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleados2')
        }
    });
}

exports.editIdiomas = (req, res) =>{
    const codigoI = (req.body.codigoI);
    const codigoE = (req.body.codigoE);
    const nombreI = (req.body.nombreI);
    const tiempoI  = (req.body.tiempoI);

    conexion.query('UPDATE idiomas SET ? WHERE codigoI = ?', [{ nombreI:nombreI, tiempoI:tiempoI}, codigoI], (error) => {
        if (error){
            console.log(error);
            return;
        } else {
            res.redirect('/Empleados2')
        }
    });
}

exports.deleteIdiomas = (req, res) => {
    const codigoI  = (req.body.codigoI);

    conexion.query('DELETE FROM idiomas WHERE codigoI = ?', [codigoI], (error) => {
        if (error) {
            console.log(error);
        }
        else {
            res.redirect('/Empleados2');
        }
    });
}