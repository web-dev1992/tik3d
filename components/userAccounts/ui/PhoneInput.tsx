/* eslint-disable react/display-name */
import { FormEvent, forwardRef, ReactNode } from "react";
import CountryCodeInput from "./CountryCodeInput";
import Label from "../ui/Label";
import ErrorMessage from "../../layout/ErrorMessage";
import RemoveButton from "../ui/RemoveButton";
interface PhoneProps {
  handleChange: (event: FormEvent) => void;
  errors: { phone: string; countryCode: string };
  values: { phone: number; countryCode: number };
  removeValueHandler: (inputName: string) => void;
  flag: ReactNode;
}

const PhoneInput: React.FC<{
  props: PhoneProps;
  ref: React.Ref<HTMLInputElement>;
}> = forwardRef(({ props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start ">
      <Label label="شماره تلفن" htmlFor="phone" id="phone" />
      <div className="w-full flex flex-row justify-center items-center gap-1.5 relative">
        <input
          ref={ref}
          type="text"
          name="phone"
          id="phone"
          placeholder=""
          value={props.values.phone ?? ""}
          onChange={props.handleChange}
          pattern="09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}"
          required
          size={11}
          maxLength={11}
          className={`w-[153px] lg:w-60 xl:w-64 h-8 lg:h-9 xl:h-[58px] bg-white border  rounded-md xl:rounded-[10px]  p-[9px]  xl:p-4  text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke ${
            props.errors.phone ? "border-[#EB5757]" : "border-[#E3E1E3]"
          }`}
        />
        {props.values.phone && (
          <RemoveButton
            removeValueHandler={props.removeValueHandler}
            name="phone"
            className="absolute top-3 right-1.5 xl:top-5 xl:right-3 w-2.5 h-2.5 xl:w-5 xl:h-5"
          />
        )}

        <CountryCodeInput
          props={{
            countryCode: props.values.countryCode,
            handleChange: props.handleChange,
            error: props.errors.countryCode,
            flag: props.flag,
          }}
        />
      </div>
      {props.errors.phone && <ErrorMessage message={props.errors.phone} />}
    </div>
  );
});

export default PhoneInput;
