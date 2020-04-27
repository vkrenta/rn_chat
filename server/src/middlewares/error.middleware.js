// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const { code, name, message } = err;
  res.status(500).send({ type: 'error', payload: { code, name, message } });
};
