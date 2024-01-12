'use server';

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import NoticeEmail from '@/app/emails/notice';
import NoticeWithBackgroudEmail from '@/app/emails/notice-backgroud';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'ap.relay.ibm.com',
  port: 25,
});

const Components = {
  notice: NoticeEmail,
  noticeWithBackgroud: NoticeWithBackgroudEmail
};

const getComponentByKey = (key: string) => Components[key as keyof typeof Components];

export async function sendMail(key: string, data: any) {
  const { username, email } = data;
  console.log(username, email);
  try {
    // https://react.email/docs/integrations/nodemailer
    const htmlString = render(getComponentByKey(key)({ username }));

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
