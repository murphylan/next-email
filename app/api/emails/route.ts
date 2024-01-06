import { Resend } from "resend";
import { NextResponse } from "next/server";
import SubscribeEmail from "../../emails/subscribe";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email } = await request.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Thank you for Subscribing to our Newsletter",
    react: SubscribeEmail({
      name,
      email,
    }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
