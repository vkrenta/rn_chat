const {
  auth: { createUser, userExists },
} = require('../../db/methods');
const { resType, verify } = require('../../helpers');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userName, email, password, firstName, lastName } = verify(
      id,
      process.env.LINK_SECRET
    );
    const isExist = await userExists({ userName });
    if (isExist)
      return res
        .status(200)
        .send({ type: resType.info, message: `You cant activate twice` }); // and here html
    await createUser({ userName, email, password, firstName, lastName });
    res
      .status(200)
      .send({ type: resType.info, message: `Created user ${userName}` });
    // instead send html file
  } catch (e) {
    if (e.code === 2000)
      res.status(201).send({ type: resType.info, message: `Link expired` });
    // and here send html file
    next(e);
  }
};
