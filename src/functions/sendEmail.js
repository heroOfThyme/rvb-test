import { createTransport } from '@types/nodemailer';

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);

  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: params.email,
    subject: 'Test Email',
    text: 'This is a test email from your Astro.js application.'
  };

  let info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: "Email sent",
  };
}