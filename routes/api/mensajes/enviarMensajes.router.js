const router = require('express').Router();
const controller = require('../../../src/mensajes/infrastructure/controller/enviarMensajes.controller');
module.exports = router.post('/enviar-mensajes', controller);