import { Fragment, useState } from "react";
import React from "react";
import OutsideLayout from "@components/layout/OutsideLayout";

interface InputProps {
  showDropDown: boolean;
  onClick: () => void;
  selectItems: any[];
}

const DropDown = (props) => {
  const { selectItems,className } = props;
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
        className="focus:border-2 focus:ring-blue-500 focus:border-blue-500  border rounded-r-md border-stone-200  w-full h-full  py-1 flex flex-row items-center justify-center  gap-1 text-gray-400 focus:text-gray-700 "
        onClick={openCloseSearchSelect}
        type="button"
      >
        <span>{selectItems[0]}</span>
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
        <ul className="list-none flex flex-col items-start justify-center flex-nowrap w-full  absolute bg-white z-10 divide-y divide-gray-200 ">
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

export default DropDown;

