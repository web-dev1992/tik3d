import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "helper/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let userId = req.query.userId;
  if (!userId) return;
  if (req.method === "GET") {
    let client;
    try {
      client = await connectToDatabase();
      const db = client.db("Tik3D");
      const payments = await db
        .collection("payments")
        .find({ userId: userId })
        .toArray();
      if (payments.length === 0) {
        res.status(404).json({ message: "پرداختی یافت نشد!" });
        return;
      }
      res.status(201).json({
        payments: payments,
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  } else if (req.method === "POST") {
    const data = req.body;
    const { subId, amount, paid, discount, description, month } = data;

    if (
      !subId ||
      !amount ||
      !paid ||
      discount == null ||
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
      const payment = await db.collection("payments").findOne({
        $and: [
          { userId: userId },
          { active: true },
          { payStatus: "successful" },
        ],
      });
      console.log("active payments=====>", payment);
      let remindedTime = 0;

      if (payment !== null || payment.length > 0) {
        if (new Date().getTime() < new Date(payment.endAt).getTime()) {
          //calculate remindedd days from last active subscription
          remindedTime = payment.endAt.getTime() - new Date().getTime();
        }
      }

      const update = await db
        .collection("payments")
        .updateMany(
          { $and: [{ userId: userId }, { active: true }] },
          { $set: { active: false } }
        );

      const result2 = await db.collection("payments").insertOne({
        subId,
        userId,
        amount,
        paid,
        discount,
        description,
        active: true,
        payStatus: "successful",
        startAt: new Date(),
        endAt: new Date( //Date.now() + (oneDayduration * month) + remindedTime===> endAt date...
          Date.now() +
            /*milisec*/ 1000 /*sec*/ *
              60 /*min*/ *
              60 /*hour*/ *
              24 /*day*/ *
              30 *
              month +
            remindedTime
        ),
      });
      res.status(201).json({
        payment:result2,
        message:
          "از خرید شما سپاسگزاریم، اشتراک قبلی به صورت خودکار غیرفعال و اشتراک تازه خریداری شده برای شما فعال می شود; زمان باقیمانده از اشتراک قبلی به اشتراک فعلی شما افزوده میشود!",
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      client.close();
    }
  }
}

export default handler;
