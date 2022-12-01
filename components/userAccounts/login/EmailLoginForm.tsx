import { FormEvent, useState, useEffect } from "react";
import useFormValidation from "hooks/useFormValidation";
import RemoveButton from "../ui/RemoveButton";
import ErrorMessage from "../ui/ErrorMessage";
import EyeButton from "../ui/EyeButton";
import PasswordTips from "../ui/PasswordTips";
import SubmitButton from "../ui/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import Label from "../ui/Label";
const EmailLoginForm: React.FC<{}> = () => {
  const [showTip, setShowTip] = useState<boolean>(true);
  const [passwordInputType, setPasswordInputType] = useState<boolean>(true);
  const showTipHandler = (state: boolean) => {
    setShowTip(state);
  };
  const PasswordInputTypeHandler = () => {
    setPasswordInputType(!passwordInputType);
  };
  const submitEmailLoginHandler = (event: FormEvent) => {
    //Send Request For Submiting Form
    console.log("form was successfuly submmited");
  };
  const {
    values,
    errors,
    verify,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitEmailLoginHandler, 2);

  return (
    <form
      className="w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5 mx-12 mb-14 xl:mt-10 xl:mb-28"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
        <Label htmlFor="email" id="emaillbl" label="ایمیل" />
        <div className="w-full flex flex-row justify-center items-center gap-1.5 relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={values.email ?? ""}
            onChange={handleChange}
            required
            maxLength={100}
            className={`w-full h-8 lg:h-9 xl:h-[58px] bg-white border  rounded-md xl:rounded-[10px]  p-[9px]  xl:p-4  text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
              errors.email ? "border-[#EB5757]" : "border-[#E3E1E3]"
            }`}
          />
          {values.email && (
            <RemoveButton
              name="email"
              removeValueHandler={removeValueHandler}
            />
          )}
        </div>
        {errors.email && <ErrorMessage message={errors.email} />}
      </div>
      <div className=" relative w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
        <Label htmlFor="password" id="passwordlbl" label="کلمه عبور" />
        <div className="w-full flex flex-row justify-center items-center  relative">
          <input
            type={passwordInputType ? "password" : "text"}
            name="password"
            id="password"
            placeholder=""
            value={values.password ?? ""}
            onChange={handleChange}
            onFocus={() => setShowTip(true)}
            onBlur={() => setShowTip(false)}
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
              name="password"
              removeValueHandler={removeValueHandler}
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

export default EmailLoginForm;
