import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { ObjectId } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const id = req.query.audioId.toString();
    const _Id = new ObjectId(id);
    const db = client.db("Tik3D");
    const audio = await db.collection("audios").findOne({ _id: _Id });
    if (audio.length === 0) {
      res.status(404).json({ message: "محصولی با این آیدی یافت نشد!" });
      return;
    }
    
    res.status(201).json({
      audio: audio,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
