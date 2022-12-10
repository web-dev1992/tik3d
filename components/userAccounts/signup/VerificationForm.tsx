import { useState } from "react";
import ErrorMessage from "../../layout/ErrorMessage";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import Heading from "../../layout/FormTitle";

const VerificationForm: React.FC<{ signupMethod; destination }> = ({
  signupMethod,
  destination,
}) => {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("کد تایید دوباره ارسال شد");
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
  return (
    <form
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
        {error && <ErrorMessage message={error} />}
        {message && (
          <span className="text-[#27AE60] text-[7px] xl:text-xs xl:leading-3 fonr-normal leading-[8px] text-right ">
            {message}
          </span>
        )}
        <SubmitButton />
        <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
          <CustomeLink
            text={
              signupMethod === "phone" ? "ویرایش شماره تلفن" : "ویرایش ایمیل"
            }
            href="#"
          />
          <CustomeLink href="#" text="ارسال دوباره کد تایید" />
        </div>
      </div>
    </form>
  );
};

export default VerificationForm;
