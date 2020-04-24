const bcrypt = require('bcrypt');
const fs = require('fs');
const
{
	VERIFY_ROUTE,
	SALT_ROUNDS
} = require('../../config');


const { resType, sendMail, verify } = require('../../helpers');

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


		let token;

		bcrypt.genSalt(SALT_ROUNDS, (err, salt) =>
		{
			bcrypt.hash(password, salt, (e, hash) => 
			{
				token = verify.sign(
					{
							userName,
							hash, // Hashed password
							email,
							firstName,
							lastName,
					},
					{
						expiresIn: '15m'
					});
			});
		});

    const link = `${VERIFY_ROUTE}/${token}`;
		let htmlTemplate;

		fs.readFileSync('../views/regconfirm.html', (err, data) =>
		{
			if (err) next(err);


			htmlTemplate = data;
			htmlTemplate = htmlTemplate.replace('{{userName}}', userName);
			htmlTemplate = htmlTemplate.replace('{{link}}', link);
		});
		
		await sendMail({
		to: email,
		subject: 'Verify your email',
			html: htmlTemplate	
		});
    res.status(200).send({
      type: resType.info,
      message: `Verification letter sended to ${email}`,
    });
  } catch (e) {
    next(e);
  }
};
