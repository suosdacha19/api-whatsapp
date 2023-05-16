const router = require('express').Router();

router.use('/', [
    require('./enviarMensajes.router'),
    require('./validarNumero.router')
])

module.exports = router;