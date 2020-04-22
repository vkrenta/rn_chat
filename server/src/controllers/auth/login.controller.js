module.exports = (req, res, next) => {
  try {
    (() => {})();
    res.status(200).send({ token: 'Auth token' });
  } catch (e) {
    next(e);
  }
};
