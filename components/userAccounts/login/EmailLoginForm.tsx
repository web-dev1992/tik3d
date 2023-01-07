import { useRef } from "react";
import Swal from "sweetalert2";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import useFormValidation from "hooks/useFormValidation";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import SubmitButton from "../../layout/SubmitButton";
import CustomeLink from "../ui/CustomeLink";
import axios from "axios";
import { useSubContext } from "store/subContext";
const EmailLoginForm: React.FC<{}> = () => {
  const subCtx = useSubContext();
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const submitEmailLoginHandler = async () => {
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

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

    const result = await signIn("credential_email_password", {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.error) {
      Swal.fire({
        title: "خطا",
        text: result.error,
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
      return;
    } else {
      try {
        const session = await getSession();
        const result = await axios(
          `/api/payments/get-active-payment/${session.user.id}`
        );
        if (result.status === 201) {
          if (
            new Date(result.data.payment.endAt).getTime() -
              new Date().getTime() >
            0
          ) {
            subCtx.setSubHandler(new Date(result.data.payment.endAt).getTime());
          } else {
            subCtx.removeSubHandler();
          }
        }
        router.replace("/");
      } catch (err) {
        if (err.response.status === 404) {
          Swal.fire({
            title: "خطا",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "فهمیدم!",
          });
        } else
          Swal.fire({
            title: "خطا",
            text: err.message || "خطایی بوجود آمده است.",
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
  } = useFormValidation(submitEmailLoginHandler);

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
