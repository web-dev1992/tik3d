import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopDashboardHamburgerMenu from "@components/dashboard/DesktopDashboardHamburgerMenu";
import ReactFlagsSelect from "react-flags-select";
import LanguageDropDown from "@components/dashboard/LanguageDropDown";
const DashboardHeader = () => {
  const menuItems = [
    { label: "صفحه نخست", href: "/" },
    { label: "دانلود رایگان", href: "/downloads" },
    { label: "محصولات", href: "/products" },
    { label: "تماس با ما", href: "/contact-us" },
    { label: "درباره ما", href: "/about-us" },
  ];
  return (
    <Fragment>
      {/*Desktop  Header */}
      <div className="bg-[#F6F8FB] hidden lg:flex xl:hidden flex-row flex-nowrap justify-between items-center w-full h-10 m-auto  mx-6 font-IRANSans  ">
        <div className="relative flex flex-row items-center justify-start h-10 ">
          {/* <!-- hamburgur menu --> */}
          <DesktopDashboardHamburgerMenu
            className="h-full w-full flex flex-row justify-start"
            menuItems={menuItems}
          />
        </div>
        <div
          className="w-60 flex flex-row flex-nowrap justify-start items-center gap-4 "
          style={{ direction: "ltr" }}
        >
          <button className="w-24 h-9 border rounded border-[#2F80ED] flex flex-row justify-center items-center py-[8px] px-[18px] bg-[#F9FBFD] text-xxs font-bold leading-4 text-[#2F80ED]">
            دانلود رایگان
          </button>
          <LanguageDropDown className=" " />
          {/* <ReactFlagsSelect
            id="lang-select"
            selected="IR"
            onSelect={() => {}}
            countries={["IR", "GB"]}
            showSelectedLabel={true}
            showOptionLabel={true}
            customLabels={{ IR: "Fa", GB: "EN" }}
            selectedSize={9}
            optionsSize={9}
            selectButtonClassName="!justify-center !pl-1 !item-center !h-4 !w-14 !bg-white text-gray-200 !border-none  "
          /> */}
        </div>
      </div>
      {/* Xlarg Desktop Header */}
      <div className="bg-[#F6F8FB] hidden xl:flex flex-row flex-nowrap justify-between items-center w-full h-16 m-auto  mx-6  font-IRANSans ">
        <ul className="list-none flex flex-row flex-nowrap justify-start items-center  gap-9 ">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <a className="text-black text-base hover:underline">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row flex-nowrap justify-end items-center gap-3 w-4/12">
          <div
            className="flex flex-row flex-nowrap justify-start items-center gap-4 "
            style={{ direction: "ltr" }}
          >
            <button className="w-[150px] h-14 border-2 rounded-md border-[#2F80ED] flex flex-row justify-center items-center py-3 px-5 bg-[#F9FBFD] text-base font-bold text-[#2F80ED]">
              دانلود رایگان
            </button>
            <LanguageDropDown className=" relative" />
            {/* <ReactFlagsSelect
              id="lang-select"
              selected="IR"
              onSelect={() => {}}
              countries={["IR", "GB"]}
              customLabels={{ IR: "Fa", GB: "EN" }}
              showSelectedLabel={true}
              showOptionLabel={true}
              selectedSize={15}
              optionsSize={15}
              selectButtonClassName="!justify-center !pl-1 !item-center !h-8 !w-20 !bg-white !border-none "
              placeholder="Select Language"
            /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardHeader;
