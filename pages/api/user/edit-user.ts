import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { hashPassword } from "helper/auth";
import { getSession } from "next-auth/react";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "ابتدا وارد سایت شوید!" });
    return;
  }
  const email = session.user.email;
  const phone = session.user?.phone;
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
    const usersCollection = client.db().collection("users");
    const hashedPassword = await hashPassword(req.body.password);
    const newUserInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      password: hashedPassword,
      updatedAt: new Date(),
    };
    console.log("newUserInfo=>", newUserInfo);
    if (email) {
      const result = await usersCollection.updateOne(
        {
          email: email,
        },
        {
          $set: newUserInfo,
        }
      );
    } else {
      const result = await usersCollection.updateOne(
        {
          phone: phone,
        },
        {
          $set: newUserInfo,
        }
      );
    }

    res.status(201).json({
      user: newUserInfo,
      message: "اطلاعات کاربری با موفقیت تغییر یافت!",
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
