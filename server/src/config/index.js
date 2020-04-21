require('dotenv').config({ path: 'src/config/.env' });

const dbName = process.env[`DB_NAME_${process.env.NODE_ENV}`];

const mongoUri = process.env.MONGO_URI.replace('{{DB_NAME}}', dbName);

module.exports = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: mongoUri,
};
