'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false); //Forzar a que los metodos antiguos se desactiven
mongoose.Promise = global.Promise;// Para el funcionamiento interno de mongoose
//mongoose.connect(url,opciones)
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser: true})
.then( ()=>{
    console.log('Conexión Db exitosa!!!');

    //Crear servidor y escuchar peticiones
    app.listen(port, ()=>{
        console.log('Server running in http://localhost:'+port);
    });

});