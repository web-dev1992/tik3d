import PercentIcon from "@components/ui/PercentIcon";
import { FormEvent, useRef } from "react";
interface discountBoxProps {
  showDiscount: boolean;
  openCloseDiscount: () => void;
  discountHandler: (code: string) => void;
}
const DiscountBox: React.FC<{ discountProps: discountBoxProps }> = ({
  discountProps,
}) => {
  const discountRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const code = discountRef.current.value;
    if (code === "") {
      alert("یک کد معتبر وارد نمایید!");
      return;
    } else discountProps.discountHandler(code);
  };
  return (
    <div className="h-max w-full rounded lg:rounded-md xl:rounded-[10px] overflow-hidden mt-3 lg:mt-4">
      <div
        className={` w-full h-10 lg:h-14 xl:h-[90px]  py-[3px] px-3 lg:px-4 xl:px-[30px] flex flex-row flex-nowrap justify-start items-center border border-[#E2E2E2]  bg-white  group hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] ${
          discountProps.showDiscount && "bg-[#F5F5F5]"
        }`}
      >
        <button
          className={`w-full h-full py-1 flex flex-row items-center justify-between  pl-1 bg-white group-hover:bg-[#F5F5F5] font-IRANSans font-medium text-[7px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black ${
            discountProps.showDiscount && "bg-[#F5F5F5]"
          }`}
          onClick={discountProps.openCloseDiscount}
          type="button"
        >
          <span className="flex flex-row flex-nowrap items-center justify-start">
            <span className="w-5 h-5 lg:w-[30px] lg:h-[30px] xl:w-[42px] xl:h-[42px] flex flex-row justify-center  items-center rounded-full bg-[#E2E2E2] ">
              <PercentIcon />
            </span>
            <span className="   px-2 font-medium text-[8px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black">
              کد تخفیف
            </span>
          </span>
          <svg
            className={` w-1.5 h-4 lg:w-2.5 lg:h-5 xl:w-3.5 xl:h-6 transform transition  ${
              discountProps.showDiscount && "rotate-180"
            }`}
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.807523 0.82404C1.07537 0.550819 1.49451 0.52598 1.78987 0.749525L1.87449 0.82404L7.91988 6.99093L13.9653 0.82404C14.2331 0.550818 14.6523 0.52598 14.9476 0.749524L15.0322 0.82404C15.3001 1.09726 15.3244 1.52481 15.1053 1.82609L15.0322 1.9124L8.45336 8.62322C8.18551 8.89645 7.76637 8.92128 7.47102 8.69774L7.3864 8.62322L0.807523 1.9124C0.512889 1.61186 0.512889 1.12458 0.807523 0.82404Z"
              fill="#2F80ED"
            />
          </svg>
        </button>
      </div>
      {discountProps.showDiscount && (
        <div className="  w-full h-10 lg:h-14 xl:h-[90px] xl:rounded-b-[10px] py-[3px] px-3 lg:px-4 xl:px-[30px] flex flex-row flex-nowrap justify-center lg:justify-start items-center border border-[#E2E2E2] rounded-b lg:rounded-b-md bg-white ">
          <form
            onSubmit={submitHandler}
            className="w-full h-full flex flex-row flex-nowrap justify-between items-center"
          >
            <label
              htmlFor="discount_code"
              id="discountlbl"
              className="w-1/3 text-light text-[7px] text-right lg:text-xxs xl:text-base "
            >
              کد را وارد کنید:
            </label>
            <div className="flex flex-row flex-nowrap justify-center lg:justify-end items-center gap-1 w-2/3 ">
              <input
                ref={discountRef}
                type="text"
                name="discount_code"
                className="w-24 lg:w-[137px] xl:w-56 h-5 lg:h-7 xl:h-12 rounded-sm lg:rounded border border-[#DADADA] focus:border-blue-400 focus:outline-none px-4 text-xs xl:text-lg text-[#888888]  text-right leading-[18px] font-normal"
              />
              <button
                type="submit"
                className="text-white bg-abi text-center text-[7px] lg:text-xxs xl:text-base text-bold rounded-sm w-10 lg:w-14 xl:w-24 h-5 lg:h-7 lg:rounded xl:h-12"
              >
                تایید کد
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DiscountBox;
