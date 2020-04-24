const jwt = require('jsonwebtoken');
const {
  auth: { createUser, isUserExists },
} = require('../../db/methods');
const { resType } = require('../../helpers');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userName, email, password, firstName, lastName } = jwt.verify(
      id,
      process.env.LINK_SECRET
    );
    const isExist = await isUserExists({ userName });
    if (isExist)
      return res
        .status(200)
        .send({ type: resType.info, message: `You cant activate twice` });
    await createUser({ userName, email, password, firstName, lastName });
    res
      .status(200)
      .send({ type: resType.info, message: `Created user ${userName}` });
    // instead send html file
  } catch (e) {
    if (e.name === 'TokenExpiredError')
      res.status(201).send({ type: resType.info, message: `Link expired` });
    // and here send html file
    next(e);
  }
};
