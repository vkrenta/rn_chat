/* eslint-disable no-underscore-dangle */
/* eslint-disable no-throw-literal */
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { getUser } from '../../db/methods/auth.methods';

export default async (req, res, next) => {
  try {
    // Serialize user credentials
    const { userName, email, password } = req.body;
    const fbLogin = req.url === '/fblogin';
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
        type: 'warn',
        payload: 'Wrong username or email',
      };

    // If the user provided a wrong password
    if (!fbLogin && !(await compare(password, user.password)))
      throw {
        status: 401,
        type: 'warn',
        payload: 'Wrong password',
      };

    const jwToken = sign({ userId: user._id }, process.env.AUTH_SECRET);
    res.status(200).send({
      type: 'data',
      token: jwToken,
    });
  } catch (e) {
    next(e);
  }
};
