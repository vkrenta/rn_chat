const { User } = require('../models');
const { log } = require('../../helpers');

const createUser = async ({
  userName,
  password,
  email,
  firstName,
  lastName,
}) => {
  const user = await User.create({
    userName,
    password,
    email,
    firstName,
    lastName,
  });
  log.info({ label: 'Created user', message: user });
};

const getUser = async ({ userName, email }) =>
{
  let user;

  if (userName) user = await User.findOne({ userName }).exec();
  if (!user) user = await User.findOne({ email }).exec();
  return user;
};
const checkUser = async ({ userName, email }) =>
{
  return !!await getUser({ userName, email });
};

module.exports = {
  createUser,
  getUser,
  checkUser,
};
