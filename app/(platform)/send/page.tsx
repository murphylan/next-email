import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mail App",
  description: "Example mail app using the components.",
}

const MailPage = async () => {

  const user = await auth();

  return (
    <>
      {user ? user.user?.name : MailPage}
    </>
  )
}

export default MailPage