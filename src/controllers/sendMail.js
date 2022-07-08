const nodemailer = require("nodemailer");
require("dotenv").config();
const { USERMAIL, PASS } = process.env;

const sendMail = (req, res) => {
  const { email, name, age, gender, genderInt, interests } = req.body;
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
  const mailOptions = {
    from: "Henry Match ",
    to: email,
    subject: "Bienvenido a Henry Match",
    text: `Hola ${name}, bienvenido a Henry Match. Esperamos que disfrutes de nuestra plataforma.`,
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
  sendMail,
};
