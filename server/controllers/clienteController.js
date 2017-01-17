var clienteModel = require('../models/clienteModel');

module.exports = {
    obtenerClientes : function(request, response, next){
        clienteModel.listaClientes(function(error, clientes){
            if(error){
                response.json({hasError: 1, error: error});
            }else{
                response.json({hasError: 0, data: clientes});
            }
        });
    },

    nuevoCliente : function(request, response, next){

    },

    bajaCliente : function(request, response, next){

    },

    modificarCliente : function(request, response, next){

    }
};