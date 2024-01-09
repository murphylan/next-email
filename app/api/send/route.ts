import { Resend } from "resend";
import { NextResponse } from "next/server";
import SubscribeEmail from "../../emails/subscribe";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function GET() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()

//   return Response.json({ data })
// }

export async function GET(request: Request) {
  // const { name, email } = await request.json();
  const { name, email } = {
    "name": "Murphy",
    "email": "murphylan123@gmail.com"
  }
  console.log(name);

  try {
    const data = await resend.emails.send({
      from: "Murphy <lanzejun@cn.ibm.com>",
      to: email,
      subject: "Thank you for Subscribing to our Newsletter",
      react: SubscribeEmail({
        name,
        email,
      }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
