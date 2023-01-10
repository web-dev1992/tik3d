import emailjs from "@emailjs/browser";
async function sendEmail(email: string, code: number) {
  if (!email || !email.includes("@") || !code) {
    throw new Error("ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!");
  }

  try {
    const result = await emailjs.send(
      process.env.email_service_id,
      process.env.email_template_id,
      {
        from_name: "Tik3d",
        message: code,
        email: email,
        to_name: email,
      },
      process.env.email_public_key
    );
    console.log("SUCCESS!", result.status, result.text);
  } catch (error) {
    console.log("FAILED...", error);
    throw new Error(error);
  }
}

export default sendEmail;
