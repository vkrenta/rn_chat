/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  const { type, message, payload, status } = err;

  const _type = type || 'error';
  const _message = message || 'INTERNAL SERVER ERROR';
  const _status = status || 500;
  const _payload = payload || _message;

  res.status(_status).send({ type: _type, payload: _payload });
};
