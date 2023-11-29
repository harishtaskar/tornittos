import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredientialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredientialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "User Name",
          placeholder: "Username",
          type: "text",
          required: true,
        },
        email: {
          label: "Email",
          placeholder: "jsmith@gmail.com",
          type: "email",
          required: true,
        },
        password: {
          label: "Password",
          placeholder: "password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials, req) {
        const session = await credentials;
        return session;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },
});

export { handler as GET, handler as POST };
