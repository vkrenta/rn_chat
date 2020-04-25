require('dotenv').config({ path: 'src/config/.env' });


const dbName = process.env[`DB_NAME_${process.env.NODE_ENV}`];
process.env.LINK_ROUTE = process.env.LINK_ROUTE.replace(
  '{{PORT}}',
  process.env.PORT
);
process.env.MONGO_URI = process.env.MONGO_URI.replace('{{DB_NAME}}', dbName);
