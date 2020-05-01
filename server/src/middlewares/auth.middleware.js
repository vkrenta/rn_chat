const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) =>
{
  try 
  {
    const userToken = req.headers.authorization;

    if (!userToken)
      throw { status: 401, message: "No token provided" };
    
    jwt.verify(userToken, process.env.AUTH_SECRET, (err, decoded)=>
    {
      if (err)
        throw { status: 401, message: "Bad or expired token provided" };
        res.body = { userId: decoded };
    });

    next();
  } catch(e) { next(e); }
};