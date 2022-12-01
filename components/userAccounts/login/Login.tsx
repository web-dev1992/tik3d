import { FormEvent, useState } from "react";
import SignupLoginLayout from "@components/layout/SignupLoginLayout";
import PhoneLoginForm from "./PhoneLoginForm";
import EmailLoginForm from "./EmailLoginForm";
import LoginMethod from "./LoginMethod";
import Heading from "../ui/Heading";
const Login = () => {
  const [loginMethod, setLoginMethod] = useState<string>("phone");
  const changeLoginMethodhandler = (state: string) => {
    setLoginMethod(state);
  };

  return (
    <SignupLoginLayout>
      <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-[18px] mt-[18px] mx-10 xl:mt-[30px] ">
        <Heading>ورود به حساب کاربری</Heading>
        <LoginMethod
          loginMethod={loginMethod}
          changeLoginMethodhandler={changeLoginMethodhandler}
        />
        {loginMethod == "phone" && <PhoneLoginForm />}

        {loginMethod == "email" && <EmailLoginForm />}
      </div>
    </SignupLoginLayout>
  );
};

export default Login;
