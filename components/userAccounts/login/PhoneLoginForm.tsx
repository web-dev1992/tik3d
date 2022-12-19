import { useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import useFormValidation from "hooks/useFormValidation";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import PhoneInput from "../ui/PhoneInput";

const PhoneLoginForm: React.FC<{}> = () => {
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const submitPhoneLoginHandler = async () => {
    const phone = phoneInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (phone.trim().length === 0 || password.trim().length === 0) {
      alert("فیلدهای شماره تلفن و رمزعبور اجباری هستند");
      return;
    }

    if (password.trim().length < 8) {
      alert("رمز وارد شده حداقل باید ۸ کاراکتر باشد!");
      return;
    }

    const result = await signIn("credential_phone_password", {
      redirect: false,
      phone: phone,
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
    flag,
    verify,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitPhoneLoginHandler);

  return (
    <form
      className="w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5 mx-12 mb-14 xl:mt-10 xl:mb-28"
      onSubmit={handleSubmit}
    >
      <PhoneInput
        props={{
          handleChange: handleChange,
          errors: { phone: errors.phone, countryCode: errors.countryCode },
          values: { phone: values.phone, countryCode: values.countryCode },
          removeValueHandler: removeValueHandler,
          flag: flag,
        }}
        ref={phoneInputRef}
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

export default PhoneLoginForm;
