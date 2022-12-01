import { FormEvent, useState } from "react";
import SuccessTikIcon from "@components/ui/SuccessTikIcon";
import CancelIcon from "@components/ui/CancelIcon";
import useFormValidation from "hooks/useFormValidation";
import Label from "../ui/Label";
import ErrorMessage from "../ui/ErrorMessage";
import RemoveButton from "../ui/RemoveButton";
import EyeButton from "../ui/EyeButton";
import PasswordTips from "../ui/PasswordTips";
import SubmitButton from "../ui/SubmitButton";
import CustomeLink from "../ui/CustomeLink";

const PhoneLoginForm: React.FC<{}> = () => {
  const [showTip, setShowTip] = useState<boolean>(true);
  const [passwordInputType, setPasswordInputType] = useState<boolean>(true);
  const PasswordInputTypeHandler = () => {
    setPasswordInputType(!passwordInputType);
  };
  const showTipHandler = (state: boolean) => {
    setShowTip(state);
  };
  const submitPhoneLoginHandler = (event: FormEvent) => {
    //Send Request For Submiting Form
    console.log("form was successfuly submmited");
  };
  const {
    values,
    errors,
    flag,
    verify,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitPhoneLoginHandler, 3);

  return (
    <form
      className="w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5 mx-12 mb-14 xl:mt-10 xl:mb-28"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
        <Label label="شماره تلفن" htmlFor="phone" id="phone" />
        <div className="w-full flex flex-row justify-center items-center gap-1.5 relative">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder=""
            value={values.phone ?? ""}
            onChange={handleChange}
            pattern="09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}"
            required
            size={11}
            maxLength={11}
            className={`w-[153px] lg:w-60 xl:w-64 h-8 lg:h-9 xl:h-[58px] bg-white border  rounded-md xl:rounded-[10px]  p-[9px]  xl:p-4  text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
              errors.phone ? "border-[#EB5757]" : "border-[#E3E1E3]"
            }`}
          />
          {values.phone && (
            <RemoveButton
              removeValueHandler={removeValueHandler}
              name="phone"
              className="absolute top-3 right-1.5 xl:top-5 xl:right-3"
            />
          )}

          <input
            type="text"
            name="countryCode"
            id="countryCode"
            value={values.countryCode ?? ""}
            onChange={handleChange}
            placeholder="کد کشور شما"
            pattern="[0-9]{3}$"
            required
            size={3}
            maxLength={3}
            className={`w-[72px] xl:w-[136px] h-8 lg:h-9 xl:h-[58px] border  bg-white rounded-md xl:rounded-[10px] pl-6 py-1 xl:py-4 xl:px-11 text-xxs xl:text-sm leading-[16px] xl:leading-[21px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke placeholder:text-[8px] xl:placeholder:text-sm placeholder:text-center xl:placeholder:text-right placeholder:text-[#BDBDBD]  ${
              errors.countryCode ? "border-[#EB5757]" : "border-[#E3E1E3]"
            }`}
          />

          {errors.countryCode ? (
            <CancelIcon className="absolute text-[#27AE60] h-[5px] w-[7px] xl:w-2.5 xl:h-2.5 top-3.5 left-[52px] xl:top-6 xl:left-20" />
          ) : (
            flag && (
              <SuccessTikIcon className="absolute text-[#27AE60] h-[5px] w-[7px] xl:w-3 xl:h-[9px] top-3.5 left-[52px] xl:top-6 xl:left-20" />
            )
          )}

          <div className="absolute top-2.5 left-2 lg:left-4 xl:top-5 xl:left-5 w-3 h-3 xl:h-5 xl:w-5 rounded-full bg-[#E0E0E0] ">
            {values.countryCode && flag}
          </div>
        </div>
        {errors.phone && <ErrorMessage message={errors.phone} />}
      </div>
      <div className="relative w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
        <Label label="کلمه عبور" htmlFor="password" id="password" />
        <div className="w-full  flex flex-row justify-center items-center relative">
          <input
            type={passwordInputType ? "password" : "text"}
            name="password"
            id="password"
            placeholder=""
            value={values.password ?? ""}
            onChange={handleChange}
            onFocus={() => showTipHandler(true)}
            onBlur={() => showTipHandler(false)}
            required
            minLength={8}
            maxLength={20}
            className={`w-full h-8 lg:h-9 xl:h-[58px] border bg-white autofill:bg-white rounded-md xl:rounded-[10px] p-[9px]  xl:p-4 text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
              errors.password ? "border-[#EB5757]" : "border-[#E3E1E3]"
            }`}
          />

          <EyeButton PasswordInputTypeHandler={PasswordInputTypeHandler} />
          {values.password && (
            <RemoveButton
              removeValueHandler={removeValueHandler}
              name="password"
              className="absolute top-3 right-5 xl:top-5 xl:right-8"
            />
          )}

          {showTip && (
            <PasswordTips
              showTipHandler={showTipHandler}
              tips={[
                "حدااقل ۸ کاراکتر",
                "حداقل 1 عدد",
                "حداقل یک کاراکتر خاص(*&^%$#@!) ",
              ]}
              verify={verify}
            />
          )}
        </div>
        {errors.password && <ErrorMessage message={errors.password} />}
      </div>

      <SubmitButton text="ورود" />
      <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
        <CustomeLink
          text="رمز خود را فراموش کرده اید؟"
          href="../user-account/forget-password"
        />
        <span className="xl:text-xs text-[#333333]">
          قبلا ثبت نام نکرده اید؟&nbsp;&nbsp;
          <CustomeLink text="ثبت نام کنید" href="../user-account/signup" />
        </span>
      </div>
    </form>
  );
};

export default PhoneLoginForm;
