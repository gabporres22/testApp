var clienteModel = require('../models/clienteModel.js');

module.exports = {
    obtenerCliente : function(request, response, next){
        var idCliente = request.params.id;

        if(! idCliente){
            response.statusCode = 500;
            response.json({error: {message: 'Debe indicar el ID de Cliente'}});
        }else{
            clienteModel.obtenerCliente(idCliente, function(error, data){
                if(error){
                    response.statusCode = 500;
                    response.json({error: error});
                }else{
                    response.statusCode = 200;
                    response.json({status: "OK", data: data});
                }
            });
        }
    },

    obtenerClientes : function(request, response, next){
        clienteModel.listaClientes(function(error, clientes){
            if(error){
                response.statusCode = 500;
                response.json({error: error});
            }else{
                response.statusCode = 200;
                response.json({data: clientes});
            }
        });
    },

    nuevoCliente : function(request, response, next){
        if(!request.body.nombre || !request.body.apellido || !request.body.email){
            response.statusCode = 500;
            response.json({error: {message: 'Debe cargar los campos requeridos'}});
        }else{
            clienteModel.altaCliente(request.body, function(error, data){
                if(error){
                    response.statusCode = 500;
                    response.json({error: error});
                }else{
                    response.statusCode = 200;
                }
            });
        }
    },

    bajaCliente : function(request, response, next){
        var idCliente = request.params.id;

        if(! idCliente){
            response.statusCode = 500;
            response.json({error: {message: 'Debe indicar el ID de Cliente'}});
        }else{
            clienteModel.bajaCliente(idCliente, function(error, data){
                if(error){
                    response.statusCode = 500;
                    response.json({error: error});
                }else{
                    response.statusCode = 200;
                }
            });
        }
    },

    modificarCliente : function(request, response, next){
        var idCliente = request.body.id;

        if(! idCliente){
            response.statusCode = 500;
            response.json({error: {message: 'Debe indicar el ID de Cliente'}});
        }else{
            clienteModel.modificacionCliente(request.body, function(error, data){
                if(error){
                    response.statusCode = 500;
                    response.json({error: error});
                }else{
                    response.statusCode = 200;
                }
            });
        }
    }
};