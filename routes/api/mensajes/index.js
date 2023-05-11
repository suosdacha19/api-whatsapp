const router = require('express').Router();

router.use('/', [
    require('./enviarMensajes.router'),
])

module.exports = router;