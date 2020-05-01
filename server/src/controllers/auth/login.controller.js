/* eslint-disable no-underscore-dangle */
/* eslint-disable no-throw-literal */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUser } = require('../../db/methods/auth.methods');

module.exports = async (req, res, next) => {
  try {
    // Serialize user credentials
    const { userName, email, password } = req.body;

    // If all of credentials are missing
    if (!userName && !email)
      throw {
        status: 400,
        type: 'info',
        payload: 'Bad request',
      };

    // Try to get user from database
    const user = await getUser({ userName, email });
    if (!user)
      throw {
        status: 401,
        type: 'info',
        payload: 'Wrong username or email',
      };

    // If the user provided a wrong password
    if (!(await bcrypt.compare(password, user.password)))
      throw {
        status: 401,
        type: 'info',
        payload: 'Wrong password',
      };

    const jwToken = jwt.sign(
      { userId: user._id },
      process.env.AUTH_SECRET,
      '1d'
    );
    res.status(200).send({
      type: 'data',
      payload: { token: jwToken },
    });
  } catch (e) {
    next(e);
  }
};
