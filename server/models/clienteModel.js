var mongoose = require('mongoose');

var ClienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefonoFijo: String,
    telefonoMovil: String
});

var Cliente = module.exports = mongoose.model('Cliente', ClienteSchema);

module.exports = {
    altaCliente : function(cliente, callback){
        var nuevoCliente = new Cliente();

        nuevoCliente.nombre = cliente.nombre;
        nuevoCliente.apellido = cliente.apellido;
        nuevoCliente.email = cliente.email;
        nuevoCliente.telefonoFijo = cliente.telefonoFijo;
        nuevoCliente.telefonoMovil = cliente.telefonoMovil;

        nuevoCliente.save(function(error, response){
            if(error){
                callback(error, null);
            }else{
                callback(null, response);
            }
        });
    },

    bajaCliente : function(id, callback){
        Cliente.findByIdAndRemove(id, function(err, response) {
            if(err) {
                callback(err, null);
            } else {
                callback(null, response);
            }
        });
    },

    modificacionCliente : function(cliente, callback){
        Cliente.findByIdAndUpdate(cliente.id, cliente, function(error, response){
            if(error){
                callback(error, null);
            }else{
                callback(null, response);
            }
        });
    },

    obtenerCliente : function(id, callback){
        Cliente.findById(id, function(error, response){
            if(error){
                callback(error, null);
            }else{
                callback(null, response);
            }
        });
    },

    listaClientes : function(callback){
        Cliente.find().exec(function(error, response){
            if(error){
                callback(error, null);
            }else{
                callback(null, response);
            }
        });
    }
};