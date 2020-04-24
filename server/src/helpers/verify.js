const Cryptr = require('cryptr');
const { EXPIRE_ERR_CODE, LINK_SECRET } = require('../config');

/* Parses date day, hours, minutes, seconds from string
 * and returns ready to use expiration Date object
 *
 * @param { String } dateStr - String in format: "Nd Nh Nm Ns"
 * 	- where N amount of specific unit(days, hours, etc..)
 * @returns { Date } date    - Date object
 */ 
function getExpDate(dateStr)
{
	// Parse time units
	const dateSplit = dateStr.split(' ');
	const parsed = { d: 0, h: 0, m: 0, s: 0 }; // Holds parsed date units
	let i = 0;
	let tmp; // Used to hold splitted number & unit letter
	
	for (; i < dateSplit.length; i += 1)
	{
		// Split unit number and letter
		tmp = dateSplit[i].split(/(\d+)/);
		// Parse date unit [2] - unit letter, [1] - number
		parsed[ tmp[2] ] = Number.parseInt([ tmp[1] ], 10);
	}
	const expDate = new Date();

	// Filling up expiration date
	expDate.setDate( expDate.getDate() + parsed.d);
	expDate.setHours( expDate.getHours() + parsed.h);
	expDate.setMinutes(expDate.getMinutes() + parsed.m);
	expDate.setSeconds( expDate.getSeconds() + parsed.s);

	return expDate;
}

/* Generates confirmation link
 *
 * @param   { Object } object  - Contains fields that is to be hashed
 * @param   { String } expires - Expiration time
 * @returns { String } hash    - hashed JSON object
 */
const sign = (object, expires) =>
{
	const cryptr = new Cryptr(LINK_SECRET);
	const Obj = object;
	Obj.expDate = getExpDate(expires);

	return cryptr.encrypt(JSON.stringify(Obj));
};

/* Verifies the expiration date of object
 *
 * @param   { String } token  - Hashed token
 * @returns { Object } parsed - Decrypted and JSON.parsed object
 */
const verify = (token) =>
{
	const cryptr = new Cryptr(LINK_SECRET);
	const decrypted = JSON.parse(cryptr.decrypt(token));
	const nowDate = new Date();

	if (decrypted.expDate <= nowDate)
	{
		delete decrypted.expDate;
		return decrypted;
	}

	const err = new Error("Link expired", "src/helpers/verify.js", 70);
	err.code(EXPIRE_ERR_CODE);

	throw err;
};


module.exports = 
{
	sign,
	verify
}