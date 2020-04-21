const { MONGO_URI } = require('./config');
const { log } = require('./helpers');

log.info(MONGO_URI);
