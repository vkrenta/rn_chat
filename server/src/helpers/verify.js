/* eslint-disable no-fallthrough */
const Cryptr = require('cryptr');

/** Parses date day, hours, minutes, seconds from string
 * and returns ready to use expiration Date object
 * @param {Number} issuesAt
 * @param { String } dateStr - String in format: "Nd Nh Nm Ns"
 * 	- where N amount of specific unit(days, hours, etc..)
 * @returns { Date } date    - Date object
 */

function getExpDate(issues, dateStr) {
  const x = dateStr[dateStr.length - 1];
  const time = Number(dateStr.substr(0, dateStr.length - 1));

  const err = new Error('Invalid time format');
  err.name = 'GetExpDate';
  if (dateStr.length <= 1 || Number.isNaN(time)) throw err;

  let multi = 1;
  switch (x) {
    case 'd':
      multi *= 24;
    case 'h':
      multi *= 60;
    case 'm':
      multi *= 60;
    case 's':
      multi *= 1000;
      break;
    default:
      throw err;
  }

  return time * multi + issues;
}

/** Generates confirmation link
 *
 * @param   { Object } object  - Contains fields that is to be hashed
 * @param   { String } expires - Expiration time
 * @returns { String } hash    - hashed JSON object
 */
const sign = (object, secret, expires) => {
  const cryptr = new Cryptr(secret);
  const Obj = object;
  Obj.expDate = getExpDate(Date.now(), expires);

  return cryptr.encrypt(JSON.stringify(Obj));
};

/** Verifies the expiration date of object
 *
 * @param   { String } token  - Hashed token
 * @returns { Object } parsed - Decrypted and JSON.parsed object
 */
const verify = (token, secret) => {
  const cryptr = new Cryptr(secret);
  const decrypted = JSON.parse(cryptr.decrypt(token));

  if (decrypted.expDate >= Date.now()) {
    delete decrypted.expDate;
    return decrypted;
  }

  const err = new Error();
  err.code = 2000;
  err.message = 'Link expired';

  throw err;
};

module.exports = {
  sign,
  verify,
  getExpDate,
};
