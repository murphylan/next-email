import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mail App",
  description: "Example mail app using the components.",
}

const MailPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Mails</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
    </div>
  )
}

export default MailPage