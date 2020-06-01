import userModel from '../../db/models/user.model';

/* eslint-disable no-throw-literal */
export default async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) throw { status: 400, message: 'Failed to get user id' };

    const { userName } = await userModel.findById(userId).exec();

    res.status(200).send({ userName });
  } catch (e) {
    next(e);
  }
};
