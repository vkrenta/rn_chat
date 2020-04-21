require('dotenv').config({ path: 'src/config/.env' });

module.exports = 
{
    PORT: process.env.PORT,
		MONGO_URI: process.env.MONGO_URI
			.replace(
				"{{DB_NAME}}", // Placeholder
				process.env[`DB_NAME_${process.env.NODE_ENV}`] // Database name
			)
};