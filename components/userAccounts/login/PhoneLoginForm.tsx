import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import Swal from "sweetalert2";
import useFormValidation from "hooks/useFormValidation";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import PhoneInput from "../ui/PhoneInput";
import axios from "axios";
import { useSubContext } from "store/subContext";
const PhoneLoginForm: React.FC<{}> = () => {
  const subCtx = useSubContext();
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitPhoneLoginHandler = async () => {
    setIsLoading(true);
    const phone = phoneInputRef.current!.value;
    const password = passwordInputRef.current!.value;

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

    const result = await signIn("credential_phone_password", {
      redirect: false,
      phone: phone,
      password: password,
    });
    if (result.error) {
      Swal.fire({
        title: "خطا",
        text: result.error,
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
      setIsLoading(false);
      return;
    } else {
      try {
        const session = await getSession();
        const result = await axios(
          `/api/payments/get-active-payment/${session.user.id}`
        );
        if (result.status === 201) {
          if (
            new Date().getTime() < new Date(result.data.payment.endAt).getTime()
          ) {
            subCtx.setSubHandler(new Date(result.data.payment.endAt).getTime());
          } else {
            subCtx.removeSubHandler();
          }
        }
      } catch (err) {
        console.log(
          err.response?.data?.message || err.message || "خطایی بوجود آمده است."
        );
        // if (err.response.status === 404) {
        //   Swal.fire({
        //     title: "خطا",
        //     text: err.response.data.message,
        //     icon: "error",
        //     confirmButtonText: "فهمیدم!",
        //   });
        // } else
        //   Swal.fire({
        //     title: "خطا",
        //     text: err.message || "خطایی بوجود آمده است.",
        //     icon: "error",
        //     confirmButtonText: "فهمیدم!",
        //   });
      } finally {
        router.replace("/");
        setIsLoading(false);
      }
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
      <SubmitButton text="ورود" disabled={isLoading} />
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
