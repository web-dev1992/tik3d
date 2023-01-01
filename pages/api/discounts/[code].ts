import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  const code = req.query.code.toString();
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const discount = await db
      .collection("discounts")
      .findOne({ $and: [{ expired: false }, { code: code }] });

    if (discount && discount.length !== 0) {
      res.status(201).json({
        discount: discount,
      });
    } else {
      res.status(404).json({ message: "تخفیفی با این کد یافت نشد!" });
      return;
    }
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
