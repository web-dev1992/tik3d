import { FormEvent, useState } from "react";
import Label from "../ui/Label";
import RemoveButton from "../ui/RemoveButton";
import EyeButton from "../ui/EyeButton";
import PasswordTips from "../ui/PasswordTips";
import ErrorMessage from "../../layout/ErrorMessage";

interface passwordInputProps {
  password: string;
  handleChange: (event: FormEvent) => void;
  error: string;
  removeValueHandler: (inputName: string) => void;
  verify: { trueLength: boolean; hasNumber: boolean; hasSpecial: boolean };
}

const PasswordInput: React.FC<{ props: passwordInputProps }> = ({ props }) => {
  const [showTip, setShowTip] = useState<boolean>(false);
  const [passwordInputType, setPasswordInputType] = useState<boolean>(true);
  const PasswordInputTypeHandler = () => {
    setPasswordInputType(!passwordInputType);
  };
  const showTipHandler = (state: boolean) => {
    setShowTip(state);
  };
  return (
    <div className="relative w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
      <Label label="کلمه عبور" htmlFor="password" id="password" />
      <div className="w-full  flex flex-row justify-center items-center relative">
        <input
          type={passwordInputType ? "password" : "text"}
          name="password"
          id="password"
          placeholder=""
          value={props.password ?? ""}
          onChange={props.handleChange}
          onFocus={() => showTipHandler(true)}
          onBlur={() => showTipHandler(false)}
          required
          minLength={8}
          maxLength={20}
          className={`w-full h-8 lg:h-9 xl:h-[58px] border bg-white autofill:bg-white rounded-md xl:rounded-[10px] p-[9px]  xl:p-4 text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
            props.error ? "border-[#EB5757]" : "border-[#E3E1E3]"
          }`}
        />
        <EyeButton PasswordInputTypeHandler={PasswordInputTypeHandler} />
        {props.password && (
          <RemoveButton
            removeValueHandler={props.removeValueHandler}
            name="password"
            className="absolute top-3 right-5 xl:top-5 xl:right-8"
          />
        )}
        {showTip && (
          <PasswordTips
            showTipHandler={showTipHandler}
            tips={[
              "حدااقل ۸ کاراکتر",
              "حداقل 1 عدد",
              "حداقل یک کاراکتر خاص(*&^%$#@!) ",
            ]}
            verify={props.verify}
          />
        )}
      </div>
      {props.error && <ErrorMessage message={props.error} />}
    </div>
  );
};

export default PasswordInput;
