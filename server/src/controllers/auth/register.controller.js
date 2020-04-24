const jwt = require('jsonwebtoken');

const { LINK_SECRET, LINK_ROUTE } = require('../../config');
const { resType, sendMail } = require('../../helpers');
const {
  auth: { isUserExists },
} = require('../../db/methods');

module.exports = async (req, res, next) => {
  try {
    const { userName, password, email, firstName, lastName } = req.body;

    if (!(userName && password && email))
      res.status(400).send({ message: 'Empty required fields' });

    const userExists = await isUserExists({ userName, email });

    // 1) check is user already exists
    if (userExists)
      return res
        .status(201)
        .send({ type: resType.info, message: 'User already exists' });

    // 2) create link
    const token = jwt.sign(
      {
        userName,
        password, // bcrypt needed
        email,
        firstName,
        lastName,
      },
      LINK_SECRET,
      { expiresIn: '15m' }
    );

    const link = `${LINK_ROUTE}/${token}`;

    // 3) send email, need static html
    await sendMail({
      to: email,
      subject: 'Verify your email',
      html: `<h3>Hi, ${userName} </h3>
      </br>
      <div>Click <a href="${link}">here</a> to end registration</div>
      </br>
      <div>Link expires in 15 min</div>
      `,
    });

    res.status(200).send({
      type: resType.info,
      message: `Verification letter sended to ${email}`,
    });
  } catch (e) {
    next(e);
  }
};
