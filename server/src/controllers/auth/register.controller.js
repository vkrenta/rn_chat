module.exports = (req, res, next) => {
  try {
    (() => {})();
    res.status(200).send({ message: 'Created user' });
  } catch (e) {
    next(e);
  }
};
