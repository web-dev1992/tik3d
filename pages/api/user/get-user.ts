import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { getSession } from "next-auth/react";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      break;
    case "GET":
      const session = await getSession({ req: req });

      if (!session) {
        res.status(401).json({ message: "ابتدا وارد سایت شوید!" });
        return;
      }
      const email = session.user.email;
      const phone = session.user.phone;
      let user;
      const client = await connectToDatabase();
      try {
        const db = client.db();
        if (email) {
          user = await db.collection("users").findOne({ email: email });
          if (!user) {
            res.status(404).json({ message: "کاربری با این ایمیل یافت نشد." });
            return;
          }
        } else {
          user = await db.collection("users").findOne({ phone: phone });
          if (!user) {
            res.status(404).json({ message: "کاربری با این شماره تلفن یافت نشد." });
            return;
          }
        }
        res.status(201).json({
          user: user,
        });
      } catch (error) {
        throw new Error(error);
      } finally {
        client.close();
      }
      break;
  }
}

export default handler;
