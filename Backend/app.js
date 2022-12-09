'use strict'

//Cargar modulos de node para crear servidor
var express = require('express'); // modulos que permiten crear el servidor
var bodyParser = require('body-parser'); //recibir las peticiones para convertirlo a JSON

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');

//MiddLewares --Logica de intercambio entre aplicaciones
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json());
//app.use(bodyParser.json({limit: '100mb', extended: true, parameterLimit: 1000000}));
//app.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit: 1000000}));

//CORS --Acceso cruzado entre dominios --https://victorroblesweb.es/2018/01/31/configurar-acceso-cors-en-nodejs/
app.use((req, res, next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();

})

//Añadir ficheros a rutas / Cargar rutas
app.use('/api',article_routes);

//Ruth - Method for Test
/*app.get('/probando', function(req, res){
  return res.status(200).send({
      name: 'Martin Feliz',
      email:'martinfm@martin.com'
  });
})*/


//Exportar modulo (fichero actual)
module.exports = app;
