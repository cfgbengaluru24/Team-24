import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import clientPromise from "./lib/mongodb";



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
        const client = await clientPromise;
        const db = client.db("shola");
        const res = await db.collection("users").findOne({ email });
        if (res && res.password === password) {
          return res;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log("jwt callback");
      if (user) {
        token.username = user?.username;
        token.email = user?.email;
        token.role = user?.role;
        token.isApproved = user?.isApproved;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("session callback");
      if (token) {
        session.user.username = token.username as string | undefined;
        session.user.email = token.email as string;
        session.user.role = token.role as string | undefined;
        session.user.isApproved = token.isApproved as boolean
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