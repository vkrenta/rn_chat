const {
  auth: { createUser, checkUser },
} = require('../../db/methods');
const { verify } = require('../../helpers');
const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const htmlTemplate = (await fs.readFile('src/views/regresult.html')).toString();
  try {
    const { id } = req.params;
    const { userName, email, password, firstName, lastName } = verify(
      id,
      process.env.LINK_SECRET
    );
    const isUser = await checkUser({ userName });

    let htmlResult;

    if (isUser) {
      htmlResult = htmlTemplate.replace('{{value}}', `You can't activate twice`);
      return res.status(200).send(htmlResult); 
    }
    await createUser({ userName, email, password, firstName, lastName });

    const msg =  `Congratulations, ${userName}! `
      + `Your account has been successfully created.`;
    htmlResult = htmlTemplate.replace('{{resultMessage}}', msg);
    
      res.status(200).send(htmlResult);
  } catch (e) {
    if (e.code === 2000) {
      const resultMsg =  `Link expired. Please try again`;
      const htmlResult = htmlTemplate.replace('{{resultMessage}}', resultMsg);
      res.status(201).send(htmlResult);
    }
    next(e);
  }
};
