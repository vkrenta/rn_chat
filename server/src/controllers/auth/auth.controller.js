module.exports = (req, res, next) =>
{
  try {
    const { userId } = res.body;
    
    if (!userId)
      throw { status: 400, message: "Failed to get user id" };

    res.status(200).send({ type: 'info', payload: "Authorized" });
  } catch (e) { next(e); }
};