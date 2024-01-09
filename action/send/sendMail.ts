'use server';

import SubscribeEmail from "@/app/emails/subscribe";
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const transporter = nodemailer.createTransport({
  host: 'ap.relay.ibm.com',
  port: 25,
});

export async function sendMail(data: any) {
  // const { name, email } = await request;

  const { name, email } = {
    "name": "Murphy",
    "email": "lanzejun@cn.ibm.com"
  }
  console.log({ name, email });

  try {
    const { renderToString } = await import('react-dom/server');
    const htmlString = renderToString(SubscribeEmail({
      name,
      email
    }));

    const mailOptions = {
      from: 'Murphy <lanzejun@cn.ibm.com>',
      to: email,
      subject: 'Newsletter',
      html: htmlString
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return null;
  } catch (error) {
    return error;
  }
}