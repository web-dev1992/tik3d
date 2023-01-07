import { useState } from "react";
import SignupLoginLayout from "@components/layout/SignupLoginLayout";
import TermsConditions from "@components/layout/TermsAndConditions";
import PhoneSignupForm from "./PhoneSignupForm";

import EmailSignupForm from "./EmailSignupForm";
import SignupMethod from "./SignupMethod";
import FormTitle from "@components/layout/FormTitle";

const Signup = () => {
  const [signupMethod, setSignupMethod] = useState<string>("phone");

  const [showConditions, setShowConditions] = useState<boolean>(false);

  const openConditionsHandler = () => {
    setShowConditions(true);
  };
  const closeConditionsHandler = () => {
    setShowConditions(false);
  };
  const changeSignupMethodhandler = (state: string) => {
    setSignupMethod(state);
  };

  return (
    <SignupLoginLayout>
      {showConditions && (
        <TermsConditions closeConditionsHandler={closeConditionsHandler} />
      )}

      <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-[18px] mt-[18px] mx-10 xl:mt-[30px] ">
        <FormTitle>ایجاد حساب کاربری</FormTitle>
        <SignupMethod
          signupMethod={signupMethod}
          changeSignupMethodhandler={changeSignupMethodhandler}
        />
        {signupMethod == "phone" && (
          <PhoneSignupForm openConditionsHandler={openConditionsHandler} />
        )}

        {signupMethod == "email" && (
          <EmailSignupForm openConditionsHandler={openConditionsHandler} />
        )}
      </div>
    </SignupLoginLayout>
  );
};

export default Signup;
