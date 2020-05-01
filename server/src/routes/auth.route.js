const { Router } = require('express');
const controllers = require('../controllers');
const mw = require('../middlewares');

const router = Router();

/* GET */
router.get('/login', mw.auth, controllers.auth.auth);

/* POST */
router.post('/register', controllers.auth.register);
router.post('/login', controllers.auth.login);


module.exports = router;
