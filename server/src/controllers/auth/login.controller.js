const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUser } = require('../../db/methods/auth.methods');

module.exports = async (req, res, next) => {
  try {
    // Serialize user credentials
    const { userName, email, password } = req.body;

    // If some/all credentials are missing
    if (!userName || (!userName && !email))
      res.status(400).send("Bad request");

    // Try to get user from database
    const user = await findUser({ userName, email });
    if (!user)
      res.status(401).send({type: 'info', payload: "Wrong username or email"});
    
    if (!await bcrypt.compare(password, user.password))
      res.status(401).send({ type: 'info', payload: "Wrong password" });
    
    // Making sign function look more compact
    const dataToSign = { userId: user._id, userName: user.name };
    const jwToken = jwt.sign(dataToSign, process.env.AUTH_SECRET);

    res.status(200).send({ type: 'data', payload: { token: jwToken } });
  } catch (e) {
    next(e);
  }
};
