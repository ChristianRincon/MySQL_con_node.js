const mysql = require('mysql');

const creacion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'personal'
});

creacion.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log('Conectado');
    }
});

creacion.on('error', (err) => {
    console.error('Error en la conexión a la base de datos:', err);
    creacion.end(); // Cerramos la conexión en caso de error
});
    
module.exports = creacion;

