const nodemailer = require("nodemailer");
require("dotenv").config();
const { USERMAIL, PASS } = process.env;

const sendMail = (req, res) => {
  const { email, name, isActive, message, matches, premium } = req.body;
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
  const mailOptions = {};
   if (isActive === false) {
    mailOptions = {
      from: "Henry Match ",
      to: email,
      subject: "Cuenta inhabilitada Henry Match",
      text: `Hola ${name}, tu cuenta ha sido inhabilitada. Por favor, contacta con el administrador para más información.`,
    };
  }
  if (premium === true) {
    mailOptions = {
      from: "Henry Match ",
      to: email,
      subject: "Cuenta premium Henry Match",
      text: `Hola ${name}, tu cuenta ha sido habilitada para uso premium.`,
    };
  }
  if (message !== "") {
    mailOptions = {
      from: "Henry Match ",
      to: email,
      subject: "Mensaje Henry Match",
      text: `Hola ${name}, recibiste un nuevo mensaje`,
    };
  }
  if (matches.length > 0) {
    mailOptions = {
      from: "Henry Match ",
      to: email,
      subject: "Nuevo match Henry Match",
      text: `Hola ${name}, recibiste un nuevo match`,
    };
  }

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
  sendMail,
};
