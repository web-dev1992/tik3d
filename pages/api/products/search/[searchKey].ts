import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
  let client;
  try {
    client = await connectToDatabase();
    const key = req.query.searchKey.toString();
    const db = client.db("Tik3D");
    const videos = await db
      .collection("videos")
      .find({
        $or: [
          {
            name: new RegExp(".*" + key + ".*"),
            tags: { $elemMatch: { $ne: key } },
          },
        ],
      })
      .project({
        renderMotor: 0,
        version: 0,
        style: 0,
        owner: 0,
        description: 0,
        tags: 0,
        downloads: 0,
        createdAt: 0,
        updatedAt: 0,
      })
      .toArray();
    const images = await db
      .collection("images")
      .find({
        $or: [
          {
            name: new RegExp(".*" + key + ".*"),
            tags: { $elemMatch: { $ne: key } },
          },
        ],
      })
      .project({
        renderMotor: 0,
        version: 0,
        style: 0,
        owner: 0,
        description: 0,
        tags: 0,
        images: 0,
        downloads: 0,
        createdAt: 0,
        updatedAt: 0,
      })
      .toArray();
    const audios = await db
      .collection("audios")
      .find({
        $or: [
          {
            name: new RegExp(".*" + key + ".*"),
            tags: { $elemMatch: { $ne: key } },
          },
        ],
      })
      .project({
        renderMotor: 0,
        version: 0,
        style: 0,
        owner: 0,
        description: 0,
        tags: 0,
        downloads: 0,
        createdAt: 0,
        updatedAt: 0,
      })
      .toArray();

    if (videos.length === 0 && images.length === 0 && audios.length === 0) {
      res.status(404).json({ message: "محصولی یافت نشد!" });
      return;
    }
    // console.log("audios====>", audios);
    // console.log("images====>", images);
    // console.log("videos====>", videos);

    res.status(201).json({
      videos: videos,
      images: images,
      audios: audios,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    client.close();
  }
}

export default handler;
