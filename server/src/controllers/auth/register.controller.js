const bcrypt = require('bcrypt');
const fs = require('fs').promises;

const { resType, sendMail, sign, log } = require('../../helpers');

const {
  auth: { checkUser },
} = require('../../db/methods');

const expireTime = '15m';

module.exports = async (req, res, next) => {
  try {
    const { userName, password, email, firstName, lastName } = req.body;

    if (!(userName && password && email))
      return res
        .status(400)
        .send({ type: 'error', message: 'Required fields are empty' });

    // 1) check if user already exists
    if (await checkUser({ userName, email }))
      return res
        .status(200)
        .send({ type: resType.info, payload: 'User already exists' });

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
      expireTime
    );

    const link = `${process.env.LINK_ROUTE}/${token}`;
    log.info({ label: 'Created link', message: link });

    const htmlTemplate = (await fs.readFile('src/views/regconfirm.html'))
      .toString()
      .replace('{{userName}}', userName)
      .replace('{{link}}', link)
      .replace('{{exp}}', '15 minutes');

    await sendMail({
      to: email,
      subject: 'Verify your email',
      html: htmlTemplate,
    });
    res.status(200).send({
      type: resType.info,
      payload: `Verification letter sended to ${email}`,
    });
  } catch (e) {
    next(e);
  }
};
