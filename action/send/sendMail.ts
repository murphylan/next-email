'use server';

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import NoticeEmail from '@/app/emails/notice';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'ap.relay.ibm.com',
  port: 25,
});

export async function sendMail(data: any) {
  const { username, email } = data;
  console.log(username, email);
  try {
    // const { renderToString } = await import('react-dom/server');
    // const htmlString = renderToString(NoticeEmail({
    //   username,
    // }));

    // const props = {
    //   username: 'John Doe',
    //   userImage: 'https://example.com/user-image.jpg',
    //   invitedByUsername: 'Acme Corp',
    // };

    // https://react.email/docs/integrations/nodemailer
    const htmlString = render(NoticeEmail({ username }));

    const mailOptions = {
      from: 'Murphy <lanzejun@cn.ibm.com>',
      to: email,
      subject: 'Wholesale Newsletter',
      html: htmlString
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return null;
  } catch (error) {
    return error;
  }
}
