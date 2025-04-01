require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors({ origin: 'https://markbriankiungakamau.vercel.app' }));
app.use(express.json());
app.use('/', router);
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('SMTP Verification Error:', error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  console.log('Received contact form submission:', req.body);
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: 'markbriankiunga@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ error: 'Error sending email', details: error });
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
