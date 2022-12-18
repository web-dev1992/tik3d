import { hashPassword } from "helper/auth";
import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 8
  ) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db();
    const existingEmail = await db
      .collection("users")
      .findOne({ email: email });
    if (existingEmail) {
      client.close();
      res
        .status(422)
        .json({ message: "قبلا کاربری یا این ایمیل ثبت شده است!" });
      return;
    }
    const hashedPassword = await hashPassword(password);
    // const indexOfAt = email.indexOf("@");
    // const username = email.slice(0, indexOfAt);
    const result = await db.collection("users").insertOne({
      firstName: "",
      lastName: "",
      // userName: username,
      gender: true,
      email: email,
      phone: "",
      password: hashedPassword,
      image: "",
      isSpecialUser: false,
      isActive: false,
    });
    client.close();
    res.status(201).json({
      message:
        "عملیات ثبت نام با موفقیت به پایان رسید. لطفا کد ارسال شده به ایمیلتان را برای فعال سازی اکانت وارد نمایید!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
