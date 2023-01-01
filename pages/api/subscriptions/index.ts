import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const subscriptions = await db
      .collection("subscription")
      .find({ isActive: true })
      .toArray();

    if (subscriptions.length === 0) {
      res.status(404).json({ message: "اشتراکی یافت نشد!" });
      return;
    }
    res.status(201).json({
      subscriptions: subscriptions,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
