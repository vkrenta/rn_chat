const { createTransport } = require('nodemailer');
const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = require('../config');

module.exports = ({ to, subject, text, html, cc, bcc }) => {
  const transporter = createTransport({
    service: MAIL_SERVICE,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  const letter = {
    from: `RNChat <${MAIL_USER}>`,
    to,
    subject,
    text,
    html,
    cc,
    bcc,
  };

  return transporter.sendMail(letter);
};
