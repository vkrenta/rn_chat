const { connect } = require('mongoose');
const { log } = require('../helpers');

module.exports = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    log.info('Successful connection to MongoDB');
  } catch (e) {
    log.error({ label: e.name, message: e.message });
    process.exit(-1);
  }
};
