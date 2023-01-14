import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useFormValidation from "hooks/useFormValidation";
import PhoneInput from "../ui/PhoneInput";
import ErrorMessage from "../../layout/ErrorMessage";
import TermsAndConditionsBox from "../ui/TermsAndConditionsBox";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import PasswordInput from "../ui/PasswordInput";
import Swal from "sweetalert2";

const PhoneSignupForm: React.FC<{
  openConditionsHandler;
}> = ({ openConditionsHandler }) => {
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const submitPhoneSignupHandler = async () => {
    if (acceptLaw) {
      const phone = phoneInputRef.current.value;
      const password = passwordInputRef.current.value;
      if (phone.trim().length === 0 || password.trim().length === 0) {
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
        setIsLoading(true);
        const response = await axios.post("/api/auth/phone-signup", {
          phone,
          password,
        });
        Swal.fire({
          title: "تبریک",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "فهمیدم!",
        });
        router.push(`/user-account/user-verification/${phone}`);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
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
    flag,
    handleChange,
    handleSubmit,
    removeValueHandler,
  } = useFormValidation(submitPhoneSignupHandler);
  return (
    <form
      noValidate
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
      <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start">
        <TermsAndConditionsBox
          acceptLaw={acceptLaw}
          acceptLawError={acceptLawError}
          acceptLawHandler={acceptLawHandler}
          openConditionsHandler={openConditionsHandler}
        />
        {acceptLawError && <ErrorMessage message={acceptLawError} />}
      </div>
      <SubmitButton text="ثبت نام" disabled={isLoading} />
      <div className="flex flex-row justify-between flex-nowrap items-center w-full text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
        <CustomeLink text="به کمک نیاز دارید؟" href="/contact-us" />
        <span className="xl:text-xs text-[#333333]">
          حساب کاربری دارید؟&nbsp;&nbsp;
          <CustomeLink text="وارد شوید" href="../user-account/login" />
        </span>
      </div>
    </form>
  );
};

export default PhoneSignupForm;
