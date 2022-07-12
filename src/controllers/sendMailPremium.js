const nodemailer = require("nodemailer");
require("dotenv").config();
const { USERMAIL, PASS } = process.env;

<<<<<<< HEAD:src/controllers/sendMailPremium.js
const sendMailPremium = (req, res) => {
  const { email, name } = req.body;
=======
const sendMail = (req, res) => {
  const { email, name, isActive, message, matches, premium } = req.body;
>>>>>>> 021d0063d183143440ba8f93b4e5edb22ac401f5:src/controllers/sendMail.js
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
<<<<<<< HEAD:src/controllers/sendMailPremium.js

  mailOptions = {
    from: "Henry Match ",
    to: email,
    subject: "Cuenta PREMIUM --------- Henry Match",
    text: `Hola ${name}, tu cuenta PREMIUM ha sido activada. Cualquier duda, contacta con el administrador.`,
  };
=======
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
//   if (matches.length > 0) {
//     mailOptions = {
//       from: "Henry Match ",
//       to: email,
//       subject: "Nuevo match Henry Match",
//       text: `Hola ${name}, recibiste un nuevo match`,
//     };
//   }
>>>>>>> 021d0063d183143440ba8f93b4e5edb22ac401f5:src/controllers/sendMail.js

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
  sendMailPremium,
};
