var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    nickname: String,
    password: String,
    token: String
});

var Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema);

module.exports = {
    autenticarUsuario : function (nickname, password, callback) {
        Usuario.findOne({nickname : nickname, password : password}, function(error, data){
            if(error){
                callback(error, null);
            }else{
                callback(null, data);
            }
        });
    },

    crearUsuario : function(usuario, callback){
        Usuario.findOne({nickname : usuario.nickname}, function(error, data){
            if(error){
                callback(error, null);
            }else{
                if(data){
                    callback('El usuario ya existe', null);
                }else{
                    var nuevoUsuario = Usuario();

                    nuevoUsuario = usuario;

                    nuevoUsuario.save(function(error, data){
                        if(error){
                            callback(error, null);
                        }else{
                            nuevoUsuario.token = jwt.sign(nuevoUsuario, process.env.JWT_SECRET);

                            nuevoUsuario.save(function (error, data) {
                                if(error){
                                    callback(error, null);
                                }else{
                                    callback(null, data);
                                }
                            });
                        }
                    });
                }
            }
        });
    },

    validarToken : function(token){
        Usuario.findOne({token : token}, function(error, data){
            if(error){
                callback(error, null);
            }else{
                callback(null, data);
            }
        });
    }
};