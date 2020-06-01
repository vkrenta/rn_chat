/* eslint-disable no-throw-literal */
import { verify } from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    const userToken = req.headers.authorization;

    if (!userToken) throw { status: 401, message: 'No token provided' };

    const decoded = verify(userToken, process.env.AUTH_SECRET);
    req.body = { userId: decoded.userId };

    next();
  } catch (e) {
    next(e);
  }
};
