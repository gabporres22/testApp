var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var jwt        = require("jsonwebtoken");
var morgan     = require("morgan");

var clienteController = require('./server/controllers/clienteController.js');
var usuarioController = require('./server/controllers/usuarioController.js');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://admin:admin@ds117839.mlab.com:17839/heroku_mvr0p9mg');

// Create our Express application
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

function ensureAuthorized(request, response, next) {
    var bearerToken;

    var bearerHeader = request.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        request.token = bearerToken;
        next();
    } else {
        response.send(403);
    }
}

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

router.route('/signin')
    .post(usuarioController.registrar);

router.route('/authenticate')
    .post(usuarioController.autenticar);

router.route('/me')
    .get(ensureAuthorized, usuarioController.validarToken);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);

console.log('Server listening at port ' + port);