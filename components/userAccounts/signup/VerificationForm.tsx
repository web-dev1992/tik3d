import { useState, useRef, FormEvent, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Swal from "sweetalert2";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import Heading from "../../layout/FormTitle";
import axios from "axios";
import sendEmail from "helper/sendEmail";
import SignupLoginLayout from "@components/layout/SignupLoginLayout";
const VerificationForm: React.FC<{
  signupMethod;
  destination;
}> = ({ signupMethod, destination }) => {
  const router = useRouter();
  const code0Ref = useRef<HTMLInputElement>(null);
  const code1Ref = useRef<HTMLInputElement>(null);
  const code2Ref = useRef<HTMLInputElement>(null);
  const code3Ref = useRef<HTMLInputElement>(null);
  const code4Ref = useRef<HTMLInputElement>(null);
  const code5Ref = useRef<HTMLInputElement>(null);
  const [activationCode, setActivationCode] = useState<number>(null);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    sendCodeHandler("کد تایید ارسال شد");
  }, []);
  const handleChange = (event) => {
    const { maxLength, value, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 5);
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 6) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=otp-${fieldIntIndex + 1}]`
        ) as HTMLElement | null; // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };
  const sendCodeHandler = async (message: string) => {
    const code = Math.floor(100000 + Math.random() * 900000);
    setActivationCode(code);
    try {
      if (signupMethod === "email") {
        const result = await sendEmail(destination, code);
        setError(false);
        setMessage(message);
      } else {
        const result = await axios.post("/api/auth/send-sms", {
          destination,
          code,
        });
        setError(false);
        setMessage(message);
      }
      console.log("verification code has been sent!");
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: error.response?.data?.message || error || "خطایی بوجود آمده است!",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
    }
  };
  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const enteredCode =
      code0Ref.current.value +
      code1Ref.current.value +
      code2Ref.current.value +
      code3Ref.current.value +
      code4Ref.current.value +
      code5Ref.current.value;
    if (+enteredCode !== activationCode) {
      Swal.fire({
        title: "خطا",
        text: "کد وارد شده صحیح نمی باشد ، مجددا تلاش کنید!",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });

      setError(true);
      setMessage("کد وارد شده صحیح نمی باشد");
      return;
    }
    try {
      const result = await axios.post("/api/auth/active-user", { destination });
      Swal.fire({
        title: "تبریک",
        text: result.data.message,
        icon: "success",
        confirmButtonText: "ممنون!",
      });

      router.push("/user-account/login");
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: error.response?.data?.message || error || "خطایی بوجود آمده است!",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
    }
  };
  return (
    <SignupLoginLayout>
      <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-[18px] mt-[18px] mx-10 xl:mt-[30px] ">
        <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center my-28 mx-10 xl:my-[187px] xl:mx-[72px] ">
          <form
            onSubmit={formSubmitHandler}
            className="w-full flex flex-col flex-nowrap justify-center items-center gap-[22px] xl:gap-10 "
            method="POST"
          >
            <div className=" w-full flex flex-col flex-nowrap justify-center items-center ">
              <Heading>
                {signupMethod === "phone" ? "تایید شماره تلفن" : "تایید ایمیل"}
              </Heading>
              <p className=" w-full text-center text-light text-[7px]  xl:text-xs leading-[10px] xl:leading-[18px] text-[#323232] ">
                لطفا کد ۶ رقمی ارسال شده به {destination} را وارد نمایید.
              </p>
            </div>

            <div className=" w-full flex flex-col gap-2.5 xl:gap-[18px] flex-nowrap justify-center items-start ">
              <div className="w-full flex flex-row-reverse justify-center items-center gap-1.5 xl:gap-2.5 ">
                {[...Array(6)].map((s, index) => {
                  return (
                    <input
                      type="text"
                      ref={
                        index == 0
                          ? code0Ref
                          : index == 1
                          ? code1Ref
                          : index == 2
                          ? code2Ref
                          : index == 3
                          ? code3Ref
                          : index == 4
                          ? code4Ref
                          : code5Ref
                      }
                      name={`otp-${index}`}
                      id={`otp-${index}`}
                      key={index}
                      placeholder=""
                      required
                      pattern="[0-9]{1}"
                      maxLength={1}
                      size={1}
                      onChange={handleChange}
                      autoFocus={index === 0}
                      className={`w-8 h-8 xl:h-14 xl:w-14 border bg-white autofill:bg-white rounded-md xl:rounded-[10px] p-[9px]  xl:p-4 text-xxs xl:text-lg leading-4 xl:leading-7 text-center font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
                        error ? "border-[#EB5757]" : "border-[#E3E1E3]"
                      }`}
                    />
                  );
                })}
              </div>
              {/* {error && <ErrorMessage message={error} />} */}
              {message && (
                <span
                  className={`${
                    error ? "text-[#EB5757]" : "text-[#27AE60]"
                  } text-[7px] xl:text-xs xl:leading-3 font-normal leading-[8px] text-right`}
                >
                  {message}
                </span>
              )}
              <SubmitButton />
              <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
                <button type="button">
                  <CustomeLink
                    text={
                      signupMethod === "phone"
                        ? "ویرایش شماره تلفن"
                        : "ویرایش ایمیل"
                    }
                    href="#"
                  />
                </button>
                <button
                  type="button"
                  onClick={sendCodeHandler.bind(
                    null,
                    "کد تایید دوباره ارسال شد"
                  )}
                >
                  <CustomeLink href="#" text="ارسال دوباره کد تایید" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SignupLoginLayout>
  );
};

export default VerificationForm;
