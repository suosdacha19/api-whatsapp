const router = require('express').Router();
const controller = require('../../../src/mensajes/infrastructure/controller/validarNumero.controller');
module.exports = router.get('/validar-numero/:numero', controller);