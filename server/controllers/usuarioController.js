var usuarioModel = require('../models/usuarioModel.js');

module.exports = {
    validarToken : function(request, response, next){
        usuarioModel.validarToken(request.token, function(error, data){
            if (error) {
                response.json({
                    type: false,
                    data: "Error occured: " + error
                });
            } else {
                response.json({
                    type: true,
                    data: data
                });
            }
        })
    },

    autenticar : function(request, response, next){
        usuarioModel.autenticarUsuario(request.body.nickname, request.body.password, function(error, data){
            if (error) {
                response.status = 500;
                response.json({
                    type: false,
                    data: "Error occured: " + error
                });
            } else {
                if (data) {
                    response.status = 200;
                    response.json({
                        type: true,
                        data: data,
                        token: data.token
                    });
                } else {
                    response.status = 401;
                    response.json({
                        type: false,
                        data: "Incorrect email/password"
                    });
                }
            }
        });
    },

    registrar : function(request, response, next){
        usuarioModel.crearUsuario(request.body, function(error, data){
            if (error) {
                response.status = 500;
                response.json({
                    type: false,
                    data: "Error occured: " + error
                });
            } else {
                response.json({
                    type: true,
                    data: data,
                    token: data.token
                });
            }
        });
    }
};