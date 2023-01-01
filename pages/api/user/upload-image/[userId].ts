import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";
import base64ToFile from "helper/base64ToFile";
import { ObjectId } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const file = { base64: req.body.base64, fileName: req.body.fileName };

  const image = base64ToFile(file);
  const userId = new ObjectId(req.query.userId.toString());

  if (!userId || !image) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db("Tik3D");
    const result = await db
      .collection("users")
      .updateOne({ _id: userId }, { $set: { image: image } });

    client.close();
    res.status(201).json({
      message: "تصویر شما با موفقیت بارگذاری شد!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
