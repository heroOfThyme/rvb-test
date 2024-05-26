const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendEmail', async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { email } = req.body;

    let transporter = nodemailer.createTransport({
        host: 'mail.rvb.network', // replace with your SMTP server host
        port: 465, // replace with your SMTP server port
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USERNAME, // replace with your SMTP server username
            pass: process.env.EMAIL_PASSWORD // replace with your SMTP server password
        }
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
});

module.exports = router;