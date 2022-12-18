import { useState } from "react";
import React from "react";
import Link from "next/link";
import OutsideLayout from "@components/layout/OutsideLayout";
type menuItem = { href: string; label: string };
interface MenuProps {
  className: string;
  menuItems: menuItem[];
}

const HamburgerMenu = (props: MenuProps) => {
  const { menuItems, className } = props;
  const [showHambugerMenu, setShowHambergerMenu] = useState(false);
  const hamburgerMenuHandler = (): void => {
    if (showHambugerMenu) setShowHambergerMenu(false);
  };
  const openCloseHamburgerMenu = () => {
    setShowHambergerMenu((showHambugerMenu) => !showHambugerMenu);
  };
  return (
    <OutsideLayout operator={hamburgerMenuHandler} className={className}>
      <button onClick={openCloseHamburgerMenu} type="button">
        <svg
          className="h-4 w-5"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M13.7169 14.9504L1 14.9504M1.00041 7.95044L17 7.95044M1 0.95044L8.02814 0.95044"
            stroke="#848484"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {/* <!-- list --> */}
      <ul
        className={`z-20 list-none flex flex-col  w-52 bg-gray-100 text-sm font-medium  overflow-hidden ${
          showHambugerMenu
            ? "h-64 max-h-64 fixed left-4 top-16 lg:left-40 "
            : "h-0 max-h-0 "
        }`}
      >
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="text-black hover:bg-abiStroke hover:text-white pr-8"
          >
            <Link href={item.href} passHref>
              <a className="text-current hover:text-white hover:font-medium">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </OutsideLayout>
  );
};

export default HamburgerMenu;
