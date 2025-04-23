const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://portfolio-bhuvanpatil.vercel.app'], //  frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test the transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'patilbhuvan27@gmail.com',
    subject: `New Contact Form Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  document.write("You are going good")
  console.log(`Server running on port ${PORT}`);
}); 