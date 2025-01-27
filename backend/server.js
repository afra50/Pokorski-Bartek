const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Konfiguracja Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint do obsługi formularza kontaktowego
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Walidacja danych
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Proszę wypełnić wszystkie pola." });
  }

  // Opcje maila
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `Nowa wiadomość od ${name}`,
    text: `${message}\n\nOdpisz na: ${email}`,
    html: `<p>${message}</p><p><strong>Odpisz na:</strong> ${email}</p>`,
    replyTo: email,
  };

  try {
    // Wysyłanie e-maila
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Wiadomość wysłana pomyślnie." });
  } catch (error) {
    console.error("Błąd podczas wysyłania e-maila:", error);
    res
      .status(500)
      .json({ msg: "Wystąpił błąd podczas wysyłania wiadomości." });
  }
});

// Ustawienie portu
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
