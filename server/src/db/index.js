const { connect } = require('mongoose');
const { MONGO_URI } = require('../config');
const { log } = require('../helpers');

module.exports = async () => {
  try {
    await connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    log.info('Successful connection to MongoDB');
  } catch (e) {
    log.error({ label: e.name, message: e.message });
    process.exit(-1);
  }
};
