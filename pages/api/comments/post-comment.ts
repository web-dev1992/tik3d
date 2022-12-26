import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { name, email, comment, star, image, productId } = req.body;
  const pId = new ObjectId(productId.toString());
  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim().length < 3 ||
    !pId ||
    !comment ||
    !star
  ) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db("Tik3D");

    const result = await db.collection("comments").insertOne({
      name,
      star,
      comment,
      email,
      productId: pId,
      image,
      createdAt:new Date(),
      updatedAt: new Date(),
    });
    client.close();
    res.status(201).json({
      message: "عملیات ثبت نظر با موفقیت به پایان رسید.!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
