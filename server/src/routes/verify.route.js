const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/:id', controllers.auth.verify);

module.exports = router;
