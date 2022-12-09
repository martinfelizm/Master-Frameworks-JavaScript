'use strict'

var express = require('express');
var ArcticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});
//rutas de prueba
router.post('/probando', ArcticleController.probando);
router.get('/test', ArcticleController.test);

//rutas utiles
router.post('/save',ArcticleController.save);
router.get('/Articles/:last?',ArcticleController.getArticles);
router.get('/Article/:id',ArcticleController.getArticle);
router.put('/Article/:id',ArcticleController.updateArticle);
router.delete('/Article/:id',ArcticleController.deleteArticle);
router.post('/upload-IMG/:id?', md_upload, ArcticleController.uploadArticleIMG);
router.get('/get-IMG/:image',ArcticleController.getIMG);
router.get('/search/:search',ArcticleController.search);
module.exports = router;