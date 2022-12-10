import { useState, FormEvent } from "react";
import Link from "next/link";
import ErrorMessage from "../layout/ErrorMessage";
import SubmitButton from "../layout/SubmitButton";
import CustomeLink from "./ui/CustomeLink";
import Heading from "../layout/FormTitle";
import RemoveIcon from "@components/ui/RemoveIcon";
import SignupLoginLayout from "@components/layout/SignupLoginLayout";
const ForgetPassword: React.FC = () => {
  const [error, setError] = useState<string>("کاربری با این مشخصات وجود ندارد");
  const [message, setMessage] = useState<string>("کد تایید دوباره ارسال شد");
  const [passRecovery, setPassRecover] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(false);
  const submitHandler = (event: FormEvent) => {
    //Send Request For Submiting Form
    console.log("form was successfuly submmited");
    setIsSend(true);
  };
  const changeHandler = (event) => {
    setPassRecover(event.target.value);
  };
  return (
    <SignupLoginLayout>
      <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-[18px] mx-10  my-28 xl:my-48  ">
        {!isSend && (
          <form
            className=" w-full flex flex-col flex-nowrap justify-center items-center gap-[22px] xl:gap-10 "
            method="POST"
            onSubmit={submitHandler}
          >
            <div className=" w-full flex flex-col flex-nowrap justify-center items-center ">
              <Heading>فراموشی رمز</Heading>
              <p className=" w-full text-center text-light text-[7px]  xl:text-xs leading-[10px] xl:leading-[18px] text-[#323232] ">
                لطفا نام کاربری، ایمیل، یا تلفن خود را وارد نمایید.
              </p>
            </div>

            <div className=" w-full flex flex-col gap-2.5 xl:gap-[18px] flex-nowrap justify-center items-start ">
              <div className="w-full flex flex-row-reverse justify-center items-center gap-1.5 xl:gap-2.5 relative ">
                <input
                  type="text"
                  name="passRecovery"
                  id="passRecovery"
                  value={passRecovery}
                  onChange={changeHandler}
                  placeholder=""
                  required
                  className={`w-full h-8 lg:h-9 xl:h-[58px] border bg-white autofill:bg-white rounded-md xl:rounded-[10px] p-[9px]  xl:p-4 text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
                    error ? "border-[#EB5757]" : "border-[#E3E1E3]"
                  }`}
                />
                {passRecovery && (
                  <button
                    type="button"
                    className="absolute top-3 right-1.5 xl:top-5 xl:right-3"
                    onClick={() => setPassRecover("")}
                  >
                    <RemoveIcon />
                  </button>
                )}
              </div>
              {error && <ErrorMessage message={error} />}
              {message && (
                <span className="text-[#27AE60] text-[7px] xl:text-xs xl:leading-3 fonr-normal leading-[8px] text-right ">
                  {message}
                </span>
              )}
              <SubmitButton text="باریابی رمز عبور" />
              <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
                <span className="xl:text-xs text-[#333333]">
                  حساب کاربری دارید؟&nbsp;&nbsp;
                  <CustomeLink text="وارد شوید" href="/user-account/login" />
                </span>
                <span className="xl:text-xs text-[#333333]">
                  قبلا ثبت نام نکرده اید؟&nbsp;&nbsp;
                  <CustomeLink
                    text="ثبت نام کنید"
                    href="/user-account/signup"
                  />
                </span>
              </div>
            </div>
          </form>
        )}
        {isSend && (
          <div className=" w-full flex flex-col flex-nowrap justify-center items-center gap-4 xl:gap-8 ">
            <p className=" w-full text-center text-light text-[7px]  xl:text-xs leading-[10px] xl:leading-[18px] text-[#323232] ">
              ایمیل حاوی لینک بازیابی رمز عبور برای شما ارسال گردید.
            </p>
            <Link href="/">
              <a className="w-full h-[34px] lg:h-9 xl:h-[58px] rounded-[2px] lg:rounded font-bold  flex flex-row items-center justify-center bg-abi text-white text-xxs xl:text-base">
                تایید
              </a>
            </Link>
          </div>
        )}
      </div>
    </SignupLoginLayout>
  );
};

export default ForgetPassword;
