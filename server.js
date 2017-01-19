var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var clienteController = require('./server/controllers/clienteController.js');
var usuarioController = require('./server/controllers/usuarioController.js');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://admin:admin@ds117839.mlab.com:17839/heroku_mvr0p9mg');

// Create our Express application
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

// Directorio publico de aplicacion Web
app.use(express.static(__dirname + '/public'));

// Create our Express router
var router = express.Router();

// Register all our routes with /api
app.use('/api', router);

router.route('/clientes')
    .get(clienteController.obtenerClientes)
    .post(clienteController.nuevoCliente)
    .put(clienteController.modificarCliente);

router.route('/clientes/:idCliente')
    .get(clienteController.obtenerCliente)
    .delete(clienteController.bajaCliente);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);

console.log('Server listening at port ' + port);