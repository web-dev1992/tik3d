import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;
  const userId = req.query.userId.toString();
  const code = req.query.code.toString();
  if (req.method === "GET") {
    try {
      client = await connectToDatabase();
      const db = client.db("Tik3D");
      const discount = await db
        .collection("userDiscounts")
        .findOne({ $and: [{ userId: userId }, { code: code }] });

      if (discount && discount.length !== 0) {
        res.status(201).json({
          hasDiscountUsed: true,
        });
      } else {
        res.status(201).json({
          hasDiscountUsed: false,
        });
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  } else if (req.method === "POST") {
    try {
      client = await connectToDatabase();
      const db = client.db("Tik3D");
      const discount = await db
        .collection("userDiscounts")
        .insertOne({ userId: userId, code: code });
      res.status(201).json({
        message: "کد تخفیف برای کاربر اعمال شد!",
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  }
}

export default handler;
