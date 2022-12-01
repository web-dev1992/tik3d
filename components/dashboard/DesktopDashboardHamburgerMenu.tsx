import {  useState } from "react";
import React from "react";
import Link from "next/link";
import OutsideLayout from "@components/layout/OutsideLayout";
type menuItem = { href: string; label: string };
interface MenuProps {
  className:string,
  menuItems: menuItem[];
}

const DesktopDashboardHamburgerMenu = (props:MenuProps) => {
  const { menuItems,className } = props;
  const [showHambugerMenu, setShowHambergerMenu] = useState(false);
  const hamburgerMenuHandler = (): void => {
    if(showHambugerMenu) setShowHambergerMenu(false);
  };
  const openCloseHaburgerMenu = () => {
    setShowHambergerMenu((showHambugerMenu) => !showHambugerMenu);    
  };
  return (
    <OutsideLayout operator={hamburgerMenuHandler} className={className}>
      <button
        onClick={openCloseHaburgerMenu}        
        type="button"
      >
        <svg
          className="h-8 w-6"
          viewBox="0 0 24 34"
          stroke="#848484"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28307 19.0688L20 19.0688M19.9996 12.0688L4 12.0688M20 5.06885L12.9719 5.06885"
            stroke="#848484"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
       
      </button>
      {/* <!-- list --> */}
      <ul
        className={`absolute z-20 list-none flex flex-col  w-52 bg-gray-200 text-sm font-medium  overflow-hidden ${
          showHambugerMenu
            ? "h-52 max-h-52 fixed right-2 top-6"
            : "h-0 max-h-0 "
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.label} className="text-black hover:bg-abiStroke hover:text-white pr-8">
            <Link href={item.href}><a className="text-current  hover:font-medium">{item.label}</a></Link>
          </li>
        ))}
      </ul>
    </OutsideLayout>
  );
};

export default DesktopDashboardHamburgerMenu;
