import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("Tik3D");
    const audios = await db
      .collection("audios")
      .find({})
      .project({
        renderMotor: 0,
        version: 0,
        style: 0,
        owner: 0,
        description: 0,
        tags: 0,
        downloads: 0,
      })
      .toArray();

    if (audios.length === 0) {
      res.status(404).json({ message: "محصولی یافت نشد!" });
      return;
    }

    res.status(201).json({
      audios: audios,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
