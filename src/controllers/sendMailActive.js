const nodemailer = require("nodemailer");
require("dotenv").config();
const { USERMAIL, PASS } = process.env;

const sendMailActive = (req, res) => {
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
    subject: "Cuenta inhabilitada --------- Henry Match",
    text: `Hola ${name}, tu cuenta ha sido inhabilitada. Por favor, contacta con el administrador para más información.`,
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
  sendMailActive,
};
