const mongoose = require('mongoose');

const Animal = mongoose.model('Animal',
  new mongoose.Schema({ nombre: String, raza: String }, { collection: 'animales' })
);

const Cuidador = mongoose.model('Cuidador',
  new mongoose.Schema({ nombre: String, apellidos: String },{ collection: 'cuidadores' })
);

module.exports = {
  Animal: Animal,
  Cuidador: Cuidador
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }