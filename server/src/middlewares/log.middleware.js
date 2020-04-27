const { log } = require('../helpers');

const safeParse = (body) => {
  let result;
  try {
    result = JSON.parse(body);
    result = JSON.stringify(result, null, '  ');
  } catch (e) {
    result = body;
  }
  return result;
};

const logReq = (req, res, next) => {
  const { method, url, body } = req;
  log.info({
    label: 'Request',
    message: JSON.stringify({ method, url, body }, null, '  '),
  });
  next();
};

const logRes = (req, res, next) => {
  const defaultWrite = res.write;
  const defaultEnd = res.end;
  const chunks = [];

  res.write = (...restArgs) => {
    chunks.push(Buffer.from(restArgs[0]));
    defaultWrite.apply(res, restArgs);
  };

  res.end = (...restArgs) => {
    if (restArgs[0]) {
      chunks.push(Buffer.from(restArgs[0]));
    }
    const body = safeParse(Buffer.concat(chunks).toString('utf8'));

    log.info({ label: 'Response', message: body });

    defaultEnd.apply(res, restArgs);
  };

  next();
};

module.exports = { logReq, logRes };
