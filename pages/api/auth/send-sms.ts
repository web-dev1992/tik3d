import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const { destination, code } = req.body;
  console.log(destination, code);
  if (!destination || !code) {
    return res
      .status(422)
      .json({
        message: "لطفا اطلاعات مورد نیاز برای انجام عملیات را ارسال نمایید",
      });
  }

  const accountSid = <string>process.env.twilio_account_sid;
  const token = <string>process.env.twilio_auth_token;
  const client = twilio(accountSid, token);
  client.messages
    .create({
      body: `your verification code is ${code.toString()}, Good luck!`,
      from: "+13149882410",
      to: `+98${destination.toString()}`,
    })
    .then((message) =>
      res.status(201).json({
        message,
      })
    )
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
}
