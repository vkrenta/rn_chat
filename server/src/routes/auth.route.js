const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.post('/register', controllers.auth.register);

router.post('/login', controllers.auth.login);

module.exports = router;
