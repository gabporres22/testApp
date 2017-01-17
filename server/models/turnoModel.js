var mongoose = require('mongoose');

var TurnoSchema = new mongoose.Schema({
    usuario: Usuario,
    cliente: Cliente,
    servicio: Servicio,
    fechaInicio: Date,
    fechaFin: Date
});

module.exports = mongoose.model('Turno', TurnoSchema);