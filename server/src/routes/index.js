const auth = require('./auth.route');
const verify = require('./verify.route');

module.exports = (app) => {
  app.use('/api/auth', auth);
  app.use('/verify', verify);
};
