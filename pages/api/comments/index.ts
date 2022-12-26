import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const comments = await db
      .collection("comments")
      .find({})
      .limit(10)
      .toArray();

    if (comments.length === 0) {
      res.status(404).json({ message: "نظری یافت نشد!" });
      return;
    }
    res.status(201).json({
      comments: comments,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
