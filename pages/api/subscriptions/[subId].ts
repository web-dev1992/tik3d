import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { ObjectId } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let subId = req.query.subId;
  if (!subId) return;
  const _Id = new ObjectId(subId.toString());
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const subscription = await db
      .collection("subscription")
      .findOne({ _id: _Id });
    if (subscription.length === 0) {
      res.status(404).json({ message: "اشتراکی یافت نشد!" });
      return;
    }
    res.status(201).json({
      subscription: subscription,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
