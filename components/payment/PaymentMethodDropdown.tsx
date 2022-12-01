import React, { Fragment, useState } from "react";
import Image from "next/image";
import OutsideLayout from "@components/layout/OutsideLayout";

const paymentItems = [
  {
    id: "p1",
    label: "پرداخت آنلاین",
    file: "/images/online-payment.png",
  },
  {
    id: "p2",
    label: "ارز دیجیتال",
    file: "/images/bitcoin-payment.png",
  },
  {
    id: "p3",
    label: "پی پال",
    file: "/images/paypal-payment.png",
  },
];
const PaymentMethodDropdown = (props) => {
  const [showItems, setShowItems] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const LangSelectHandler = (): void => {
    if (showItems) setShowItems(false);
  };
  const openCloseLangSelect = () => {
    setShowItems((showItems) => !showItems);
  };
  return (
    <OutsideLayout operator={LangSelectHandler} className={props.className}>
      <Fragment>
        <button
          onClick={openCloseLangSelect}
          className="w-full flex flex-row justify-start gap-2.5 lg:gap-3 xl:gap-[18px] items-center text-[11px] xl:text-lg text-[#888888] font-normal leading-[19px] xl:py-2 p-[9px] lg:p-[15px] xl:p-5  bg-white cursor-pointer focus:outline-none focus:border focus:border-[#4F96FF]  rounded-md border border-[#E3E1E3] xl:rounded-[10px]"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 xl:w-6 xl:h-6 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>
            {currentIndex == -1 ? (
              " نحوه پرداخت"
            ) : (
              <span>{paymentItems[currentIndex].label}</span>
            )}
          </span>
        </button>
        {showItems && (
          <ul className="absolute z-20 w-full top-8 lg:top-[34px] xl:top-14 left-15  p-[9px] lg:p-[15px] xl:p-5 rounded-md divide-y divide-[#E4E6F2] bg-white flex flex-col justify-center  border border-[#E3E1E3]">
            {paymentItems.map((payment, index) => (
              <li
                className="cursor-pointer flex flex-row flex-nowrap items-center  gap-4 text-xxs xl:text-sm  w-full  h-8 lg:h-[34px] xl:h-14 text-[#848484] bg-white  group hover:bg-abiStroke hover:text-white"
                onClick={() => {
                  setCurrentIndex(index);
                  setShowItems(false);
                }}
              >
                <span className="w-[34px] h-6">
                  <Image
                    src={paymentItems[index].file}
                    width={34}
                    height={24}
                  />
                </span>
                <span className="group-hover:text-white">{payment.label}</span>
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    </OutsideLayout>
  );
};

export default PaymentMethodDropdown;
