const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/mensajes', require('./mensajes'));

module.exports = router;