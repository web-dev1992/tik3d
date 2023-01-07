import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const { destination, code } = req.body;
  console.log(destination, code);
  client.messages
    .create({
      body: `your verification code is ${code.toString()}, Good luck!`,
      from: "+13149882410",
      to: destination.toString(),
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
