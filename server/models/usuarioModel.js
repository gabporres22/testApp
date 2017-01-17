var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    nickname: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);