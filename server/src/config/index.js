require('dotenv').config({ path: 'src/config/.env' });

const procEnv = process.env;
const { NODE_ENV } = procEnv;
const verifyRoute = procEnv.LINK_ROUTE.replace('{{PORT}}', procEnv.PORT);
const mongoUri = procEnv.MONGO_URI // Get DB URI depending on current NODE_ENV
				.replace('{{DB_NAME}}',	procEnv[`DB_NAME_${ NODE_ENV }`]);

module.exports = {
  ENV: NODE_ENV,
  PORT: procEnv.PORT,
  MONGO_URI: mongoUri,
  LINK_SECRET: procEnv.LINK_SECRET,
  LINK_ROUTE: verifyRoute,
	EXPIRED_ERR_CODE: procEnv.EXPIRED_ERR_CODE,
  MAIL_USER: procEnv.MAIL_USER,
  MAIL_SERVICE: procEnv.MAIL_SERVICE,
	MAIL_PASS: procEnv.MAIL_PASS,
};
