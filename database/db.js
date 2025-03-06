const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: 'root',
    database: 'seminario'
});

conexion.connect((error) => {
    if (error) {
        console.log('se presento un error' + error)
        return
    }
    console.log('conexion exitosa');
});

module.exports = conexion;