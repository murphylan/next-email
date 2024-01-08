import { auth } from "@/auth";

const MailPage = async () => {

  const user = await auth();

  return (
    <>
      {user ? user.user?.name : MailPage}
    </>
  )
}

export default MailPage