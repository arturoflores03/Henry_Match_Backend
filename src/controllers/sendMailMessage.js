const nodemailer = require("nodemailer");
require("dotenv").config();
const { USERMAIL, PASS } = process.env;

const sendMailMessage = (req, res) => {
  const { email, name } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 465,
    secure: true,
    // service: 'gmail',
    auth: {
      user: USERMAIL,
      pass: PASS,
    },
  });
  let mailOptions = {};

  mailOptions = {
    from: "Henry Match ",
    to: email,
    subject: "Tu cuenta se encuentra nuevamente habilitada --------- Henry Match",
    text: `Hola ${name}, estamos muy contentos de informarte que tu cuenta ha sido habilitada para que puedas volver a disfrutar de Henry Match.`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      res.status(500).json({ message: error });
    } else {
      console.log("email sent");
      res.status(200).json({ message: "Email enviado" });
    }
  });
};

module.exports = {
  sendMailMessage,
};
