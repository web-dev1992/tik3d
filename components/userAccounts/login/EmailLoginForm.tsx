import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useFormValidation from "hooks/useFormValidation";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";

const EmailLoginForm: React.FC<{}> = () => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const submitEmailLoginHandler = async () => {
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("فیلدهای نام کاربری و رمزعبور اجباری هستند");
      return;
    }

    if (password.trim().length < 8) {
      alert("رمز وارد شده حداقل باید ۸ کاراکتر باشد!");
      return;
    }

    const result = await signIn("credential_email_password", {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.error) alert(result.error);
    else {
      //set some auth state
      router.replace("/");
    }
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
