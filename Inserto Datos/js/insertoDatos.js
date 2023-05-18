const conectar = require('./connection');
const datos = require('./obtenerValue');

datos.boton.addEventListener('click', () => {
  const insertarDato = `INSERT INTO usuarios (nombre, rubro) VALUES (?, ?)`;
  const valores = [datos.valorNombre, datos.valorRubro];

  conectar.query(insertarDato, valores, (err) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return;
    }
    conectar.end();
  });
});
