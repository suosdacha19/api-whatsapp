const router = require('express').Router();

router.use('/', [
    require('./me.router'),
    require('./generarQr.router'),
])

module.exports = router;