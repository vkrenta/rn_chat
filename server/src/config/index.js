require('dotenv').config();

let dbName, mongoUri;

if (process.env.NODE_ENV == 'DEV')
    dbName = process.env.DB_NAME_DEV;
else
    dbName = process.env.DB_NAME_PROD;

mongoUri = process.env.MONGO_URI.replace("{{DB_NAME}}", dbName);

module.exports = 
{
    PORT: process.env.PORT,
    MONGO_URI: mongoUri
};