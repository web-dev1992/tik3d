import emailjs from "@emailjs/browser";
async function sendEmail(email: string, code: number) {
  if (!email || !email.includes("@") || !code) {
    throw new Error("ورودی نامعتبر است، لطفا اطلاعات صحیح وارد نمایید!");
  }

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      {
        from_name: "Tik3d",
        message: code,
        email: email,
        to_name: email,
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    );
    console.log("SUCCESS!", result.status, result.text);
  } catch (error) {
    console.log("FAILED...", error);
    throw new Error(error);
  }
}

export default sendEmail;
