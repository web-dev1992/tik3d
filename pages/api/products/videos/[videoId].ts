import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { ObjectId } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const id = req.query.videoId.toString();
    const _Id = new ObjectId(id);
    const db = client.db("Tik3D");
    const video = await db.collection("videos").findOne({ _id: _Id });
    if (video.length === 0) {
      res.status(404).json({ message: "محصولی با این آیدی یافت نشد!" });
      return;
    }

    res.status(201).json({
      video: video,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
