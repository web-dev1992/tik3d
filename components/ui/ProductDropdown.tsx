import { useState } from "react";
import React from "react";
import OutsideLayout from "@components/layout/OutsideLayout";

interface InputProps {
  showDropDown: boolean;
  onClick: () => void;
  selectItems: any[];
}

const ProductDropdown = (props) => {
  const { selectItems, className, label } = props;
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
        style={{ direction: "ltr" }}
        className="bg-white focus:border-2 w-[156px] h-9 xl:w-64 xl:h-14 focus:ring-blue-500 focus:border-blue-500  border rounded-md xl:rounded-[10px] border-[#E3E1E3]   py-1 flex flex-row items-center justify-center  gap-1 text-[#888888] focus:text-gray-700 xl:text-sm"
        onClick={openCloseSearchSelect}
        type="button"
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition ${
            showSearchSelect && "rotate-180"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showSearchSelect && (
        <ul className="list-none flex flex-col items-start justify-center flex-nowrap w-full rounded-lg absolute bg-white z-10 divide-y divide-gray-200 overflow-hidden">
          {selectItems.map((item) => (
            <li
              key={item}
              className="w-full bg-[#F2F2F2] px-[15px] py-[8px] flex flex-col items-start justify-center  gap-2.5 text-gray-500 "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </OutsideLayout>
  );
};

export default ProductDropdown;
