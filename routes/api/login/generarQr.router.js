const router = require('express').Router();
const controller = require('../../../src/login/infrastructure/controller/generarQr.controller');
module.exports = router.get('/generar-qr', controller);