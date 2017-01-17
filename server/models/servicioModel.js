var mongoose = require('mongoose');

var ServicioSchema = new mongoose.Schema({
    descripcion: String,
    duracionMinutos: Number,
    precio: Number,
    tipoServicio: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);