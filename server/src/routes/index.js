const auth = require('./auth.route');

module.exports = (app) => {
  app.use('/api/auth', auth);
};
