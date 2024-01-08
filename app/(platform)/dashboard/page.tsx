import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DashboardPage App",
  description: "Example DashboardPage app using the components.",
}

const DashboardPage = async () => {

  const user = await auth();

  return (
    <>
      {user ? user.user?.name : DashboardPage}
    </>
  )
}

export default DashboardPage