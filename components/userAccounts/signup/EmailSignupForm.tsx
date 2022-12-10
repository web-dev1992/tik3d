import { FormEvent, useState } from "react";
import useFormValidation from "hooks/useFormValidation";
import ErrorMessage from "../../layout/ErrorMessage";
import PasswordInput from "../ui/PasswordInput";
import TermsAndConditionsBox from "../ui/TermsAndConditionsBox";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import EmailInput from "../ui/EmailInput";
const EmailSignupForm: React.FC<{
  phase;
  openConditionsHandler;
}> = ({ phase, openConditionsHandler }) => {
  const [acceptLaw, setAcceptLaw] = useState<boolean>(false);
  const [acceptLawError, setAcceptLawError] = useState<string>(
    "لطفا با قوانین tik3d موافقت نمایید"
  );
  const acceptLawHandler = () => {
    setAcceptLaw((prev) => !prev);
    !acceptLaw
      ? setAcceptLawError("")
      : setAcceptLawError("لطفا با قوانین tik3d موافقت نمایید");
  };

  const submitEmailSignupHandler = (event: FormEvent) => {
    if (acceptLaw) {
      //Send Request For Submiting Form
      console.log("form was successfuly submmited");
      phase("two", values.email);
    }
  };
  const {
    values,
    errors,
    verify,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitEmailSignupHandler, 2);
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
      <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start">
        <TermsAndConditionsBox
          acceptLaw={acceptLaw}
          acceptLawError={acceptLawError}
          acceptLawHandler={acceptLawHandler}
          openConditionsHandler={openConditionsHandler}
        />
        {acceptLawError && <ErrorMessage message={acceptLawError} />}
      </div>

      <SubmitButton text="ثبت نام" />
      <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
        <CustomeLink href="/contact-us" text="به کمک نیاز دارید؟" />
        <span className="xl:text-xs text-[#333333]">
          حساب کاربری دارید؟&nbsp;&nbsp;
          <CustomeLink href="../user-account/login" text="وارد شوید" />
        </span>
      </div>
    </form>
  );
};

export default EmailSignupForm;
