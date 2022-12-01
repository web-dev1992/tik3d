import { useState } from "react";
import React from "react";
import OutsideLayout from "@components/layout/OutsideLayout";
interface inputProps {
  className: string;
  selectItems: {
    id: string;
    label: string;
    value: string;
  }[];
}
const DiscountDropdown = (props: inputProps) => {
  const { selectItems, className } = props;
  const [currentIndex, setCurrentIndex]=useState(0);
  const [showSearchSelect, setShowSearchSelect] = useState(false);
  const SearchSelectHandler = (): void => {
    if (showSearchSelect) setShowSearchSelect(false);
  };
  const openCloseSearchSelect = () => {
    setShowSearchSelect((showSearchSelect) => !showSearchSelect);
  };
  return (
    <OutsideLayout operator={SearchSelectHandler} className={className}>
      <button
        //   style={{direction:"ltr"}}
        className=" focus:border  focus:border-gray-300 w-full h-full py-1 flex flex-row items-center justify-between mx-3 pl-1 bg-white focus:outline-none  font-IRANSans font-medium text-[7px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black "
        onClick={openCloseSearchSelect}
        type="button"
      >
        <span className="   px-2 font-medium text-[8px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black">
          {selectItems[currentIndex].label}
        </span>
        <svg          
          className={` w-1.5 h-4 lg:w-2.5 lg:h-5 xl:w-3.5 xl:h-6 transform transition  ${
            showSearchSelect && "rotate-180"
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
      {showSearchSelect && (
        <ul className="rounded border border-gray-300 list-none flex flex-col items-start justify-center flex-nowrap w-full  absolute top-8 lg:top-9 xl:top-16 -left-3.5 bg-white z-10 divide-y divide-gray-200 ">
          {selectItems.map((item,index) => (
            <li
              key={item.id}
              onClick={()=>{setCurrentIndex(index); setShowSearchSelect(false)}}
              className="w-full font-IRANSans font-medium text-[7px] lg:text-[10px] xl:text-base px-[15px] py-[8px] flex flex-col items-start justify-center  gap-2.5 text-gray-500 hover:bg-[#2F80ED] hover:text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </OutsideLayout>
  );
};

export default DiscountDropdown;
