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

const userExists = async ({ userName, email }) => {
  let user;
  if (email) user = await User.findOne({ email }).exec();
  else if (userName) user = await User.findOne({ userName }).exec();
  return !!user;
};

const findUser = async ({ userName, password, email }) => {
  let user;
  if (email) user = await User.findOne({ email, password }).exec();
  else if (userName) user = await User.findOne({ userName, password }).exec();
  return user;
};

module.exports = {
  createUser,
  userExists,
  findUser,
};
