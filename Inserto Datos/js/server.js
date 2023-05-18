const express = require('express');
const conexion = require('./connection');

const app = express();
const port = 4000;


// Configuración de middleware para procesar solicitudes POST
app.use(express.urlencoded({ 
    extended: true 
}));

// Ruta para recibir la solicitud POST
app.post('/insertar', (request, response) => {
  const nombre = request.body.nombre;
  const rubro = request.body.rubro;

  const insertarDato = `INSERT INTO usuarios (nombre, rubro) VALUES (?, ?)`;
  const valores = [nombre, rubro];

  conexion.query(insertarDato, valores, (err) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      response.status(500).send('Error al insertar los datos'); // Agregamos el código de estado 500 para indicar un error interno del servidor
      return;
    }
    response.send('Datos insertados correctamente.');
  });
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
