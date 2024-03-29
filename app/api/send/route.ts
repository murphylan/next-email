import SubscribeEmail from "@/app/emails/subscribe";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function GET() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()

//   return Response.json({ data })
// }

// Create a Nodemailer transporter
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const transporter = nodemailer.createTransport({
  host: 'ap.relay.ibm.com',
  port: 25,
});


export async function GET(request: Request) {
  // const { name, email } = await request.json();
  const { name, email } = {
    "name": "Murphy",
    "email": "lanzejun@cn.ibm.com"
  }

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
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json(info);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
