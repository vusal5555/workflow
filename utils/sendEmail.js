const nodemailer = require("nodemailer");
const nodemailerConfig = require("../utils/nodeNailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Vusal Novruzov 👻" <vusal.novruzov.1@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
