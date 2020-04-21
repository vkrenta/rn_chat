require('dotenv').config();

let dbName;

if (process.env.NODE_ENV === "DEV")
    dbName = process.env.DB_NAME_DEV;
else
    dbName = process.env.DB_NAME_PROD;

module.exports = 
{
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI.replace("{{DB_NAME}}", dbName)
};