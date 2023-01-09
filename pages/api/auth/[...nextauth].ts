import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";

export default NextAuth({
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },

  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.user = user;
        token.id = user.id;
      }
      return Promise.resolve(token);
    },

    session: async ({ session, token, user }) => {
      session.user = token.user;
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credential_email_password",
      name: "credential email & password",
      credentials: {},
      async authorize(credentials: { email: string; password: string }, req) {
        const client = await connectToDatabase();
        const user = await client
          .db()
          .collection("users")
          .findOne({ email: credentials!.email });
        if (!user) {
          client.close();
          throw new Error("کاربری با این ایمیل یافت نشد!");
        }
        if (user.isActive !== true) {
          client.close();
          throw new Error(
            "اکانت شما فعال نشده است، بعد از فعال سازی می توانید وارد سایت شوید!"
          );
        }
        const isValid = await verifyPassword(
          credentials!.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error(" رمز عبور اشتباه است!");
        }
        client.close();

        return {
          name: user.firstName!,
          email: user.email!,
          id: user._id,
        } as any;
      },
    }),
    CredentialsProvider({
      id: "credential_phone_password",
      name: "credential phone & password",
      credentials: {},
      async authorize(credentials: { phone: string; password: string }, req) {
        const client = await connectToDatabase();
        const user = await client
          .db()
          .collection("users")
          .findOne({ phone: credentials!.phone });
        if (!user) {
          client.close();
          throw new Error("کاربری با این شماره تلفن یافت نشد!");
        }
        if (user.isActive !== true) {
          client.close();
          throw new Error(
            "اکانت شما فعال نشده است، بعد از فعال سازی می توانید وارد سایت شوید!"
          );
        }
        const isValid = await verifyPassword(
          credentials!.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error(" رمز عبور اشتباه است!");
        }
        client.close();

        return {
          name: user.firstName,
          phone: user.phone,
          id: user._id,
        } as any;
      },
    }),
  ],
});
