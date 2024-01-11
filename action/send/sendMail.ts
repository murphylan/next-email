'use server';

import NoticeEmail from "@/app/emails/notice";
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const transporter = nodemailer.createTransport({
  host: 'ap.relay.ibm.com',
  port: 25,
});

export async function sendMail(data: any) {
  const { username, email } = data;

  // const { username, email } = {
  //   "username": "Murphy",
  //   "email": "lanzejun@cn.ibm.com"
  // }

  try {
    const { renderToString } = await import('react-dom/server');
    const htmlString = renderToString(NoticeEmail({
      username,
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