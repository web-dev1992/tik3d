import { FormEvent, useState } from "react";
import SignupLoginLayout from "@components/layout/SignupLoginLayout";
import TermsConditions from "./Terms&Conditions";
import PhoneSignupForm from "./PhoneSignupForm";
import VerificationForm from "./VerificationForm";
import EmailSignupForm from "./EmailSignupForm";
import SignupMethod from "./SignupMethod";
import Heading from "../ui/Heading";
let dest = "";
const Signup = () => {
  const [signupMethod, setSignupMethod] = useState<string>("phone");
  const [showConditions, setShowConditions] = useState<boolean>(false);
  const [phase, setPhase] = useState<string>("one");

  const openConditionsHandler = () => {
    setShowConditions(true);
  };
  const changeSignupMethodhandler = (state: string) => {
    setSignupMethod(state);
  };
  const closeConditionsHandler = () => {
    setShowConditions(false);
  };
  const phaseHandler = (state: string, destination: string) => {
    setPhase(state);
    dest = destination;
  };
  return (
    <SignupLoginLayout>
      {showConditions && (
        <TermsConditions closeConditionsHandler={closeConditionsHandler} />
      )}
      {phase === "one" ? (
        <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-[18px] mt-[18px] mx-10 xl:mt-[30px] ">
          <Heading>ایجاد حساب کاربری</Heading>
          <SignupMethod
            signupMethod={signupMethod}
            changeSignupMethodhandler={changeSignupMethodhandler}
          />
          {signupMethod == "phone" && (
            <PhoneSignupForm
              openConditionsHandler={openConditionsHandler}
              phase={phaseHandler}
            />
          )}

          {signupMethod == "email" && (
            <EmailSignupForm
              phase={phaseHandler}
              openConditionsHandler={openConditionsHandler}
            />
          )}
        </div>
      ) : (
        <div className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center my-28 mx-10 xl:my-[187px] xl:mx-[72px] ">
          <VerificationForm signupMethod={signupMethod} destination={dest} />
        </div>
      )}
    </SignupLoginLayout>
  );
};

export default Signup;
