const { logReq, logRes } = require('./log.middleware');
const errorMiddleware = require('./error.middleware');
const auth = require('./auth.middleware');

module.exports = {
  logReq,
  logRes,
  errorMiddleware,
  auth  
};
