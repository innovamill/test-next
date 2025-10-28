import { logoutAction } from "@/app/actions/auth";
import { auth } from "@/auth";
import { NavUserClient } from "./nav-user";

export async function NavUser() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  // Extract user data from session
  const user = {
    firstName: session.user.given_name || "User",
    lastName: session.user.family_name || "",
    email: session.user.email || "",
  };

  return <NavUserClient user={user} onLogout={logoutAction} />;
}
