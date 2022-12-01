import { FormEvent, Fragment, useState } from "react";
import PaymentHeader from "@components/layout/PaymentHeader";
import PaymentMethodDropdown from "./PaymentMethodDropdown";
import Link from "next/link";
import SuccessTikIcon from "@components/ui/SuccessTikIcon";
import UnsuccessIcon from "@components/ui/UnsuccessIcon";
const subscriptionInfo = {
  id: "s1",
  month: 3,
  price: "40,000",
};
const Payment = () => {
  const [acceptLaw, setAcceptLaw] = useState<boolean>(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] =
    useState<boolean>(false);
  const [isPaymentDone, setIsPaymentDone] = useState<boolean>(false);
  const err = true;
  const acceptLawHandler = () => {
    setAcceptLaw((prev) => !prev);
  };
  const submitPaymentHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-full flex flex-col flex-nowrap justify-center items-center bg-[#F6F8FB] gap-24">
      <PaymentHeader />
      <div className="w-[327px] lg:w-[351px] xl:w-[566px] flex flex-col flex-nowrap justify-center items-center gap-[18px] bg-white pt-[18px] px-[42px] rounded-[5px] xl:rounded-lg mb-56 lg:mb-40 xl:mb-64">
        {isPaymentDone ? (
          <form className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-8 xl:gap-14  py-24 xl:py-[164px] ">
            <span>
              {isPaymentSuccessful ? (
                <SuccessTikIcon className="w-14 h-[42px] lg:w-[60px] lg:h-11 xl:w-24 xl:h-[72px]" />
              ) : (
                <UnsuccessIcon />
              )}
            </span>
            <span className="w-full text-center text-black font-medium text-xl lg:text-[22px] xl:text-4xl lg:leading-9 leading-[35px] ">
              پرداخت موفقیت آمیز {isPaymentSuccessful ? "بود" : "نبود"}
            </span>
            <div className="w-full flex flex-col flex-nowrap justify-start items-center gap-[5px] xl:gap-[9px]">
              <button
                type="submit"
                className="w-full h-[34px] lg:h-9 xl:h-14 rounded-[2px] lg:rounded font-bold text-center bg-abi text-white text-xxs xl:text-base"
              >
                ادامه
              </button>
              {!isPaymentSuccessful && (
                <Link href="#">
                  <a className="w-full text-[#2D9CDB] text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
                    بازگشت به داشبورد
                  </a>
                </Link>
              )}
            </div>
          </form>
        ) : (
          <Fragment>
            <h1 className=" w-full text-center text-[#0F2137] text-[14px] xl:text-2xl leading-8 xl:leading-[55px] tracking-normal font-bold">
              خرید اشتراک
            </h1>
            <div className="flex flex-col flex-nowrap gap-[2px] w-full justify-center items-center ">
              <p className="w-full text-center text-[#CACACA] text-xxs lg:text-[11px] xl:text-lg font-normal leading-6">
                اشتراک ویژه {subscriptionInfo.month} ماهه
              </p>
              <p className="w-full text-center text-[#4F96FF] text-[21px] xl:text-4xl lg:text-[23px] font-bold leading-6 tracking-wide">
                {subscriptionInfo.price} تومان
              </p>
            </div>
            <form
              className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-6 mx-12 mb-14 "
              onSubmit={submitPaymentHandler}
            >
              <PaymentMethodDropdown className="mt-[30px]  flex flex-row flex-nowrap w-full   h-8 lg:h-[34px] xl:h-14 relative" />
              <div className="relative w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5">
                <input
                  type="text"
                  name="discount-code"
                  placeholder=""
                  size={20}
                  className="w-full h-8 lg:h-9 xl:h-14 border border[#E3E1E3] rounded-md px-1.5 py-3 xl:px-[11px] xl:py-5 text-xxs xl:text-lg leading-[16px] xl:leading-[28px] text-left font-normal text-[#888888] focus:outline-none focus:border focus:border-[#4F96FF] "
                />
                <span className="absolute top-2.5 lg:top-3.5 xl:top-5 right-2 text-[7px] xl:text-xs text-[#333333] leading-[10px] xl:leading-[18px] font-light">
                  کد تخفیف:
                </span>
                {err && (
                  <span className="text-[#EB5757] font-normal text-[7px] text-right w-full leading-[8px] xl:text-xs  xl:leading-[13px]">
                    کد تخفیف وارد شده اشتباه است یا قبلا استفاده شده است.
                  </span>
                )}
                <div className="w-full flex flex-row gap-1 text-[7px] xl:text-xs font-light justify-start items-center">
                  <label
                    htmlFor="accept-law"
                    id="accept-alw-lbl"
                    className="inline-flex items-center gap-1 relative"
                  >
                    <input
                      type="checkbox"
                      name="accept-law"
                      id="accept-law"
                      value="true"
                      onClick={acceptLawHandler}
                      className={`appearance-none outline-none rounded-[2px] xl:rounded-[3px] w-2.5 h-2.5 xl:w-[17px] xl:h-[17px] ${
                        acceptLaw
                          ? "bg-[#4F96FF] border-none"
                          : "bg-white border border-abiStroke "
                      }`}
                    />
                    <span className=" absolute h-full top-[2px] right-[2px] xl:left-6   ">
                      {acceptLaw && (
                        <svg
                          className="w-[7px] h-[5px] xl:w-3 xl:h-2.5  "
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.20569 6.20947L3.70569 8.70947L10.3724 1.20947"
                            stroke="white"
                            strokeLinecap="square"
                          />
                        </svg>
                      )}
                    </span>
                    قوانین و مقررات Tik3d را می پذیرم.
                  </label>
                  <Link href="#">
                    <a className="text-[#2D9CDB] text-[7px] xl:text-xs font-light leading-[10px]">
                      مشاهده قوانین
                    </a>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full h-[34px] lg:h-9 xl:h-14 rounded-[2px] lg:rounded font-bold text-center bg-abi text-white text-xxs xl:text-base"
                >
                  پرداخت
                </button>
                <Link href="#">
                  <a className="w-full text-[#2D9CDB] text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
                    به کمک نیاز دارید؟{" "}
                  </a>
                </Link>
              </div>
            </form>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Payment;
