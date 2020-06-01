import { createTransport } from 'nodemailer';

export default ({ to, subject, text, html, cc, bcc }) => {
  const transporter = createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const letter = {
    from: `RNChat <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
    cc,
    bcc,
  };

  return transporter.sendMail(letter);
};
