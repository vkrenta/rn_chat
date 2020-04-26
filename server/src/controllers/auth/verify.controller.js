const {
  auth: { createUser, userExists },
} = require('../../db/methods');
const { resType, verify } = require('../../helpers');
const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const htmlTemplate = (await fs.readFile('src/views/regresult.html')).toString();
    try {
    const { id } = req.params;
    const { userName, email, password, firstName, lastName } = verify(
      id,
      process.env.LINK_SECRET
    );
    const isExist = await userExists({ userName });

    let htmlResult;

    if (isExist) {
      htmlResult = htmlTemplate.replace('{{value}}', `You can't activate twice`);
      return res.status(200).send(htmlResult); // and here html
    }
    await createUser({ userName, email, password, firstName, lastName });

    htmlResult = htmlTemplate.replace('{{value}}', `Congratulations, ${userName}! Your account has been successfully created.`);
    res.status(200).send(htmlResult);
    // instead send html file
  } catch (e) {
    if (e.code === 2000) {
      htmlResult = htmlTemplate.replace('{{value}}', `Link expired. Please try again`);
      res.status(201).send(htmlResult);
    }
    // and here send html file
    next(e);
  }
};
