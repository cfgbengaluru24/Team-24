import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        const user = {
          username: "test",
          email: email,
          password: password,
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("jwt callback");
      if (user) {
        token.username = user?.username;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("session callback");
      if (token) {
        session.user.username = token.username as string | undefined;
      }

      return session;
    },
  },

  pages: {
    // signIn: "/signin",
    // signOut: "/signout",
    // error: "/error",
    // newUser: "/new-user",
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "dark",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);