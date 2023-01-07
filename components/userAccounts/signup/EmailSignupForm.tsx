import { FormEvent, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useFormValidation from "hooks/useFormValidation";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import ErrorMessage from "../../layout/ErrorMessage";
import TermsAndConditionsBox from "../ui/TermsAndConditionsBox";
const EmailSignupForm: React.FC<{
  openConditionsHandler;
}> = ({ openConditionsHandler }) => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

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

  const submitEmailSignupHandler = async () => {
    if (acceptLaw) {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      if (email.trim().length === 0 || password.trim().length === 0) {
        Swal.fire({
          title: "اخطار",
          text: "فیلدهای نام کاربری و رمزعبور اجباری هستند",
          icon: "warning",
          confirmButtonText: "فهمیدم!",
        });
        return;
      }

      if (password.trim().length < 8) {
        Swal.fire({
          title: "اخطار",
          text: "رمز وارد شده حداقل باید ۸ کاراکتر باشد!",
          icon: "warning",
          confirmButtonText: "فهمیدم!",
        });
        return;
      }

      try {
        const response = await axios.post("/api/auth/email-signup", {
          email,
          password,
        });
        Swal.fire({
          title: "تبریک",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "فهمیدم!",
        });

        router.push(`/user-account/user-verification/${email}`);
      } catch (error) {
        Swal.fire({
          title: "خطا",
          text:
            error.response?.data?.message || error || "خطایی بوجود آمده است!",
          icon: "error",
          confirmButtonText: "فهمیدم!",
        });
      }
    }
  };
  const {
    values,
    errors,
    verify,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitEmailSignupHandler);
  return (
    <form
      noValidate
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
        ref={emailInputRef}
      />
      <PasswordInput
        props={{
          password: values.password,
          handleChange: handleChange,
          error: errors.password,
          removeValueHandler: removeValueHandler,
          verify: verify,
        }}
        ref={passwordInputRef}
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
