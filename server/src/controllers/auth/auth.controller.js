/* eslint-disable no-throw-literal */
export default (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) throw { status: 400, message: 'Failed to get user id' };

    res.status(200).send({ type: 'info', payload: `Authorized ${userId}` });
  } catch (e) {
    next(e);
  }
};
