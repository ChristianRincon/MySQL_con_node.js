const select = document.getElementById('select');
const nombre = document.getElementById('nombre');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
  module.exports.valorNombre = nombre.value;
  module.exports.valorRubro = select.value;
});

module.exports = {
  boton: boton,
  valorNombre: '',
  valorRubro: ''
};
