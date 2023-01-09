import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let userId = req.query.userId;
  if (!userId) return;

  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const payment = await db
      .collection("payments")
      .findOne({ $and: [{ userId: userId }, { active: true }] });

    if (!payment || payment.length === 0) {
      res.status(404).json({ message: "پرداختی یافت نشد!" });
      return;
    }
    res.status(201).json({
      payment: payment,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
