const router = require('express').Router();
const controller = require('../../../src/login/infrastructure/controller/me.controller');
module.exports = router.get('/me', controller);