import AuthController from "@app/src/controllers/auth.controller";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "app-credentials",
      name: "app-credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const [err, data] = await new AuthController({
            fields: credentials,
          }).signIn();

          if (err) return false;
          if (!data) return false;

          const token = "KNJKFSJNKjasdkjas";
          Reflect.set(data, "token", token);

          return {
            error: false,
            ...data,
          };
        } catch (error) {
          console.log("error auth", error);
          throw new Error(error?.message);
        }
      },
    }),

    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  jwt: {
    maxAge: 3 * 24 * 60 * 60, // 3 hari
    secret: process.env.JWT_SECRET,
  },
  session: {
    maxAge: 3 * 24 * 60 * 60, // 3 hari
    strategy: "jwt", // jwt, database
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ account, profile, user, credentials }) {
      console.log({
        account,
        profile,
        user,
      });
      switch (account?.provider) {
        case "app-credentials":
          return true;
        default:
          return false;
      }
    },
    async jwt({ token, user, profile }) {
      let newData = {};
      console.log({
        token,
        user,
        profile,
      });
      return {
        ...token,
        user,
        profile,
      };
    },
    async session({ session, token, user }) {
      if (Date.now() > moment(session?.expires)) {
        return null;
      }
      return session;
    },
  },
  debug: true,
};

export default NextAuth(authOptions);
