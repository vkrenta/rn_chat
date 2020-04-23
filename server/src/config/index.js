require('dotenv').config({ path: 'src/config/.env' });

const dbName = process.env[`DB_NAME_${process.env.NODE_ENV}`];
const linkRoute = process.env.LINK_ROUTE.replace('{{PORT}}', process.env.PORT);
const mongoUri = process.env.MONGO_URI.replace('{{DB_NAME}}', dbName);

module.exports = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: mongoUri,
  LINK_SECRET: process.env.LINK_SECRET,
  LINK_ROUTE: linkRoute,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
  MAIL_PASS: process.env.MAIL_PASS,
};
