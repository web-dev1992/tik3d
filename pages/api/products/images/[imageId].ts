import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";
import { ObjectId } from "mongodb";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const id = req.query.imageId.toString();
    const _Id = new ObjectId(id);
    const db = client.db("Tik3D");
    const image = await db.collection("images").findOne({ _id: _Id });
    if (image.length === 0) {
      res.status(404).json({ message: "محصولی با این آیدی یافت نشد!" });
      return;
    }

    res.status(201).json({
      image: image,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
