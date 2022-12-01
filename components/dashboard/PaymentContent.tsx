import SortIcon from "@components/ui/SortIcon";
import { Fragment } from "react";
import Image from "next/image";
const PaymentContent = () => {
  return (
    <Fragment>
      <div className="w-full flex flex-col flex-nowrap justify-center items-center lg:gap-2 ">
        <h1 className="w-full text-right text-[#0F2137] text-base xl:text-2xl font-bold leading-[55px] lg:leading-[34px] xl:leading-[55px] tracking-wide">
          آخرین پرداختی ها
        </h1>
        <div className="w-full flex flex-col flex-nowrap justify-center items-center gap-[5px] lg:gap-[7px] xl:gap-2.5">
          {/* first row(header) */}
          <div className="w-full h-6 lg:h-8 xl:h-[50px] flex flex-row flex-nowrap justify-center items-center bluuuu lg:bg-abi  text-white text-[8px] lg:text-xxs xl:text-base  font-normal rounded-[5px] lg:rounded-[7px] xl:rounded-[10px] ">
            <span className="w-3/12 lg:w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]">
              تاریخ
            </span>
            <span className="w-4/12 lg:w-3/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]">
              مبلغ (به تومان)
            </span>
            <span className="w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] border-l xl:leading-[55px] border-[#E2E2E2]">
              وضعیت
            </span>
            <span className="w-3/12 lg:w-5/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px]">
              جزئیات
            </span>
          </div>
          {/* other rows */}
          {[...Array(10)].map((index) => (
            <div className="w-full h-6 lg:h-8 xl:h-[50px] flex flex-row flex-nowrap justify-center items-center   text-gray-500 text-[8px] lg:text-xxs xl:text-base font-normal rounded-[5px] lg:rounded-[7px] xl:rounded-[10px] border border-[#E2E2E2]">
              <span className="w-3/12 lg:w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2] "></span>
              <span className="w-4/12 lg:w-3/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]"></span>
              <span className="w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]"></span>
              <span className="w-3/12 lg:w-5/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px]"></span>
            </div>
          ))}
        </div>
        <div className="w-full h-7 mt-[14px] lg:mt-1  flex flex-row justify-end items-center  ">
          <button className="h-full flex flex-row flex-nowrap items-center justify-center gap-1 lg:gap-2 xl:gap-3 w-max text-[#848484] leading-[26px] font-normal text-[6px] lg:text-[8px] xl:text-xs">
            <span>بیشتر</span>
            {/* <SortIcon /> */}
            <span className="lg:hidden">
              <Image src="/images/sort.png" width="8" height="4" />
            </span>
            <span className="hidden lg:block xl:hidden">
              <Image src="/images/sort.png" width="13" height="4" />
            </span>
            <span className="hidden xl:block">
              <Image src="/images/sort.png" width="21" height="7" />
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentContent;
