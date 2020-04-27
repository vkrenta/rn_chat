const { logReq, logRes } = require('./log.middleware');
const errorMiddleware = require('./error.middleware');

module.exports = {
  logReq,
  logRes,
  errorMiddleware,
};
