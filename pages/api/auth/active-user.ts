import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const data = req.body;
  const { destination } = data;

  if (!destination || destination.length < 6) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db();
    if (destination.includes("@")) {
      const result = await db
        .collection("users")
        .updateOne({ email: destination }, { $set: { isActive: true } });
    } else {
      const result = await db
        .collection("users")
        .updateOne({ phone: destination }, { $set: { isActive: true } });
    }

    client.close();
    res.status(201).json({
      message:
        "فعال سازی اکانت شما با موفقیت انجام شد. اکنون می توانید وارد سایت شوید!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
