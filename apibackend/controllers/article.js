'use strict'

var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article');

var fs = require('fs');
var path = require('path');
const { exists } = require('../models/article');
var controller = {
    probando: (req, res) => {
        return res.status(200).send({
            name: 'Martin Feliz',
            email: 'martinfm@martin.com'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //Recoger parametros por post
        var params = req.body;
        //Validar datos (validator)
        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (error) {
            return res.status(200).send({
                status: 'Error',
                message: 'Error enviando datos!!!'
            });
        }

        if (validate_title && validate_content) {

            //Crear el objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            if(params.image){
              article.image = params.image
            }
            else {
              article.image = null;
            }
           

            //Guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'Error',
                        message: 'Articulo no guardado!!!'
                    });
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'OK',
                    article: articleStored
                });

            });

        }
        else {
            return res.status(200).send({
                status: 'Error',
                message: 'Hay problema!!!'
            });
        }

    },

    getArticles: (req, res) => {
        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            //console.log(last);              
            query.limit(2);
        }
        //Find
        //Article.find({}).sort('-_id') ---Desendente por el id
        query.exec((err, articles) => {

            if (err || !articles) {
                return res.status(400).send({
                    status: 'Error',
                    message: 'Hay un error??'
                });
            }


            return res.status(200).send({
                status: 'Ok',
                articles
            });

        });

    },

    getArticle: (req, res) => {
        //Recoger id de la url        
        var id = req.params.id;
        console.log(id);
        //Comprobar que existe
        if (!id || id == null || id == undefined) {
            return res.status(404).send({
                status: 'Error',
                message: 'No existe el articulo !!!'
            });
        }
        //Buscar el articulo
        Article.findById(id, (err, article) => {
            if (err || !article) {
                return res.status(500).send({
                    status: 'Error',
                    message: 'No existe el articulo !!!'
                });
            }
            //Devolver json
            return res.status(200).send({
                status: 'Ok',
                article
            });
        });






    },
    updateArticle: (req, res) => {
        //Recoger los datos
        var vId = req.params.id;

        //Recoger los datos que llegan por PUT
        var params = req.body;

        //Validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

            if (validate_title && validate_content) {
                Article.findByIdAndUpdate({ _id: vId }, params, { new: true }, (err, articleUpdated) => {
                    if (err) {
                        return res.status(500).send({
                            status: 'Error',
                            message: 'Error en el servidor!!!'
                        });
                    }

                    if (!articleUpdated) {
                        return res.status(404).send({
                            status: 'Error',
                            message: 'No encontrado!!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'Ok',
                        article: articleUpdated
                    });
                });
            } else {
                return res.status(404).send({
                    status: 'Error',
                    message: 'Faltan datos por enviar ???'
                });
            }

        } catch (error) {
            return res.status(404).send({
                status: 'Error',
                message: 'Faltan datos por enviar ???'
            });
        }

    },

    deleteArticle: (req, res) => {
        //Recoger el id del url  
        var vId = req.params.id;

        //Find and delete
        Article.findOneAndDelete({ _id: vId }, (err, articleDeleted) => {
            if (err) {
                return res.status(500).send({
                    status: 'Error',
                    message: 'Error en el servidor!!!'
                });
            }

            if (!articleDeleted) {
                return res.status(404).send({
                    status: 'Error',
                    message: 'No encontrado!!!'
                });
            }

            res.status(200).send({
                status: 'Ok',
                article: articleDeleted
            });
        });


    },

    uploadArticleIMG: (req, res) => {
        //Configurar el modulo connect multiparty router/article.js

        //Recoger el fichero de la peticion
        var file_name = 'Imagen por subir'
        //Conseguir nombre y la extension del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\')
        //* AVERTENCIA * EN LINUX O MAC/
        // var file_split = file_path.split('\')

        //Nombre de Archivo
        var file_name = file_split[2];

        //Extesion del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1].toLocaleLowerCase();


        //Comprobar la extension, solo imagenes, si es valida borrar fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
            //Borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(404).send({
                    status: 'Error',
                    message: 'Error para borrar la imagen ??'
                });
            });
        } else {
            //Si todo es valido (Validar)
            var vId = req.params.id;
            if (vId) {
                //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({ _id: vId }, { image: file_name }, { new: true }, (err, articleUp) => {
                    if (err || !articleUp) {
                        return res.status(404).send({
                            status: 'Error',
                            message: 'Error para guardar la imagen ??'
                        });
                    }
                    return res.status(200).send({
                        status: 'Ok',
                        message: 'Todo bien !!!',
                        article: articleUp
                    });

                });
            }
            else{
                return res.status(200).send({
                    status: 'Ok',
                    image: file_name
                });
            }

        }

    },

    getIMG: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'Error',
                    message: 'No encontrado!!!'
                });
            }
        });


    },

    search: (req, res) => {
        //Sacar el string a buscar
        var searching = req.params.search;

        //Find or Error
        Article.find({
            "$or": [
                { "title": { "$regex": searching, "$options": "i" } },
                { "content": { "$regex": searching, "$options": "i" } },
            ]
        })
            .sort([['date', "descending"]])
            .exec((err, articles) => {
                if (err) {
                    return res.status(500).send({
                        status: 'Error',
                        message: 'Error en el Servidor'
                    });
                }
                if (!articles || articles.length == 0) {
                    return res.status(404).send({
                        status: 'Error',
                        message: 'Articulo no encontrado'
                    });
                }
                return res.status(200).send({
                    status: 'Ok',
                    articles
                });
            })

    }

};

module.exports = controller;