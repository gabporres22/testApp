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

    },

    modificacionCliente : function(id, cliente, callback){

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