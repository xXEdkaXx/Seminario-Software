const express=require('express')
const router=express.Router();

const conexion=require('./database/db')

router.get('/Cliente',(req,res)=>{
    conexion.query("select * from clientes",(error,resultado)=>{
        if(error){
            console.log(error);
            return;
        }
        else{
        res.send(resultado);
        }
    })
});

router.get('/Empleado',(req,res)=>{
    res.send('Este es un mensaje de Empleados');
})

router.get('/Empleados2',(req,res)=>{
    res.render('index');
});

module.exports=router;
