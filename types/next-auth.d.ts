import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    given_name?: string;
    family_name?: string;
  }

  interface Session {
    user: {
      email?: string | null;
      given_name?: string;
      family_name?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    given_name?: string;
    family_name?: string;
  }
}
