import { FormEvent } from "react";
import Label from "../ui/Label";
import RemoveButton from "../ui/RemoveButton";
import ErrorMessage from "../../layout/ErrorMessage";

interface EmailProps {
  email: string;
  handleChange: (event: FormEvent) => void;
  error: string;
  removeValueHandler: (inputName: string) => void;
}

const EmailInput: React.FC<{ props: EmailProps }> = ({ props }) => {
  return (
    <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
      <Label htmlFor="email" id="emaillbl" label="ایمیل" />
      <div className="w-full flex flex-row justify-center items-center gap-1.5 relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=""
          value={props.email ?? ""}
          onChange={props.handleChange}
          required
          maxLength={100}
          className={`w-full h-8 lg:h-9 xl:h-[58px] bg-white border  rounded-md xl:rounded-[10px]  p-[9px]  xl:p-4  text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
            props.error ? "border-[#EB5757]" : "border-[#E3E1E3]"
          }`}
        />
        {props.email && (
          <RemoveButton
            name="email"
            removeValueHandler={props.removeValueHandler}
          />
        )}
      </div>
      {props.error && <ErrorMessage message={props.error} />}
    </div>
  );
};

export default EmailInput;
