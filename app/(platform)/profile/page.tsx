import { Metadata } from "next";
import { ProfileForm } from "./_components/profile-form";

export const metadata: Metadata = {
  title: "ProfilePage App",
  description: "Example ProfilePage app using the components.",
}

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <ProfileForm />
    </div>
  )
}

export default ProfilePage