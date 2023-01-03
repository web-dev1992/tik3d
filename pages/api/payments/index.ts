import { connectToDatabase } from "helper/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const data = req.body;
  const {
    productId,
    userId,
    amount,
    paid,
    discount,
    number,
    description,
    month,
  } = data;

  if (
    !productId ||
    !userId ||
    !amount ||
    !paid ||
    discount == null ||
    !number ||
    !description ||
    !month
  ) {
    res
      .status(422)
      .json({ message: "ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!" });
    return;
  }
  const client = await connectToDatabase();
  try {
    const db = client.db("Tik3D");
    const update = await db
      .collection("payments")
      .updateMany(
        { $and: [{ userId: data.userId }, { active: true }] },
        { $set: { active: false } }
      );

    const result = await db.collection("payments").insertOne({
      productId,
      userId,
      amount,
      paid,
      discount,
      number,
      description,
      active: true,
      payStatus: "successful",
      startAt: new Date(),
      endAt: new Date(
        Date.now() +
          /*milisec*/ 1000 *
            /*sec*/ 60 *
            /*min*/ 60 *
            /*hour*/ 24 *
            /*day*/ 30 *
            month
      ),
    });
    client.close();
    res.status(201).json({
      message:
        "از خرید شما سپاسگزاریم، اشتراک قبلی به صورت خودکار غیرفعال و اشتراک تازه خریداری شده برای شما فعال می شود!",
    });
  } catch (error) {
    client.close();
    throw new Error(error);
  }
}

export default handler;
