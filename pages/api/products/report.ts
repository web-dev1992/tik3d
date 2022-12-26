import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;

  const { reportText } = req.body;
  //   const pId = new ObjectId(productId.toString());
  if (!reportText || reportText.length < 3) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db("Tik3D");

    const result = await db.collection("reports").insertOne({
      reportText,
      createdAt:new Date(),
      updatedAt: new Date(),
    });
    client.close();
    res.status(201).json({
      message: "عملیات گزارش خرابی با موفقیت به پایان رسید.!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
