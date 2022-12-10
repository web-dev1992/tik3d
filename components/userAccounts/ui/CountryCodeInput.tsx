import { Fragment, FormEvent, ReactNode } from "react";
import SuccessTikIcon from "@components/ui/SuccessTikIcon";
import CancelIcon from "@components/ui/CancelIcon";
interface CountryCodeProps {
  countryCode: number;
  handleChange: (event: FormEvent) => void;
  error: string;
  flag: ReactNode;
}

const CountryCodeInput: React.FC<{ props: CountryCodeProps }> = ({ props }) => {
  return (
    <Fragment>
      <input
        type="text"
        name="countryCode"
        id="countryCode"
        value={props.countryCode ?? ""}
        onChange={props.handleChange}
        placeholder="کد کشور شما"
        pattern="[0-9]{3}$"
        required
        size={3}
        maxLength={3}
        className={`w-[72px] xl:w-[136px] h-8 lg:h-9 xl:h-[58px] border  bg-white rounded-md xl:rounded-[10px] pl-6 py-1 xl:py-4 xl:px-11 text-xxs xl:text-sm leading-[16px] xl:leading-[21px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-abiStroke placeholder:text-[8px] xl:placeholder:text-sm placeholder:text-center xl:placeholder:text-right placeholder:text-[#BDBDBD]  ${
          props.error ? "border-[#EB5757]" : "border-[#E3E1E3]"
        }`}
      />
      {props.error ? (
        <CancelIcon className="absolute text-[#27AE60] h-[5px] w-[7px] xl:w-2.5 xl:h-2.5 top-3.5 left-[52px] xl:top-6 xl:left-20" />
      ) : (
        props.flag && (
          <SuccessTikIcon className="absolute text-[#27AE60] h-[5px] w-[7px] xl:w-3 xl:h-[9px] top-3.5 left-[52px] xl:top-6 xl:left-20" />
        )
      )}
      <div className="absolute top-2.5 left-2 lg:left-4 xl:top-5 xl:left-5 w-3 h-3 xl:h-5 xl:w-5 rounded-full bg-[#E0E0E0] ">
        {props.countryCode && props.flag}
      </div>
    </Fragment>
  );
};

export default CountryCodeInput;
