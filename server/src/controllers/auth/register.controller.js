const bcrypt = require('bcrypt');
const fs = require('fs').promises;

const { resType, sendMail, sign } = require('../../helpers');

const {
  auth: { userExists },
} = require('../../db/methods');

module.exports = async (req, res, next) => {
  try {
    const { userName, password, email, firstName, lastName } = req.body;

    if (!(userName && password && email))
      res.status(400).send({ message: 'Empty required fields' });

    // 1) check if user already exists
    if (await userExists({ userName, email }))
      return res
        .status(201)
        .send({ type: resType.info, message: 'User already exists' });

    // 2) bcrypt password
    const cPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );

    // 3) get link
    const token = sign(
      {
        userName,
        password: cPassword,
        email,
        firstName,
        lastName,
      },
      process.env.LINK_SECRET,
      '15m'
    );

    const link = `${process.env.LINK_ROUTE}/${token}`;

    const htmlTemplate = (await fs.readFile('src/views/regconfirm.html'))
      .toString()
      .replace('{{userName}}', userName)
      .replace('{{link}}', link);

    await sendMail({
      to: email,
      subject: 'Verify your email',
      html: htmlTemplate,
    });
    res.status(200).send({
      type: resType.info,
      message: `Verification letter sended to ${email}`,
    });
  } catch (e) {
    next(e);
  }
};
