const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const restFul = require('express-method-override');
const routes = require('./routes/router'); // No necesitas la extensión .js
const cors = require('cors');

const faviconURL = `${__dirname}/public/img/node-favicon.png`;
const publicDir = express.static(`${__dirname}/public`);
const viewDir = `${__dirname}/views`;
const port = process.env.PORT || 5007;
const app = express();

// Importa el controlador de clientes (asegúrate de que la ruta sea correcta)
const { 
    getAllClientes, 
    getClienteById, 
    insertCliente, 
    updateCliente, 
    deleteCliente 
} = require('./controllers/cliente-controller');

// Rutas para los servicios API REST
app.get('/clientes', getAllClientes);
app.get('/clientes/:id', getClienteById);
app.post('/clientes', insertCliente);
app.put('/clientes/:id', updateCliente);
app.delete('/clientes/:id', deleteCliente);

app
    .set('views', viewDir)
    .set('view engine', 'jade')
    .set('port', port)
    .use(cors())
    .use(favicon(faviconURL))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(restFul)
    .use(morgan('dev'))
    .use(publicDir)
    .use(routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});