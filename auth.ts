import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Cognito({
      authorization: {
        params: {
          scope: "openid email phone profile",
        },
      },
      profile(profile) {
        return profile;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.given_name = user.given_name;
        token.family_name = user.family_name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.given_name = token.given_name as string;
        session.user.family_name = token.family_name as string;
      }
      return session;
    },
  },
});
