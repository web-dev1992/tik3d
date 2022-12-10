import { FormEvent } from "react";
import useFormValidation from "hooks/useFormValidation";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";


const EmailLoginForm: React.FC<{}> = () => {
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
      <EmailInput
        props={{
          email: values.email,
          handleChange: handleChange,
          error: errors.email,
          removeValueHandler: removeValueHandler,
        }}
      />
      <PasswordInput
        props={{
          password: values.password,
          handleChange: handleChange,
          error: errors.password,
          removeValueHandler: removeValueHandler,
          verify: verify,
        }}
      />

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
