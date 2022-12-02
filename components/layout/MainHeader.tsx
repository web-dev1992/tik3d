import LanguageDropDown from "@components/dashboard/LanguageDropDown";
import Image from "next/image";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";
import DropDown from "@components/ui/Dropdown";
import HamburgerMenu from "@components/ui/HamburgerMenu";
const menuItems = [
  { label: "صفحه نخست", href: "/" },
  { label: "دانلود رایگان", href: "/downloads" },
  { label: "محصولات", href: "/products" },
  { label: "تماس با ما", href: "/contact-us" },
  { label: "درباره ما", href: "/about-us" },
];
const MainHeader = () => {
  return (
    <div className="w-full bg-[#F6F8FB]">
      {/* Mobile Header */}
      <div className="  md:hidden flex flex-row flex-nowrap justify-between items-center w-11/12 h-9 m-auto font-IRANSans mt-8 mx-[22px] ">
        <div className="w-4/12 flex flex-row flex-nowrap justify-start items-center ">
          <Link href="/">
            <Image
              src="/images/mobile-logo.png"
              alt="logo"
              height={35}
              width={87}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className=" w-7/12 h-8 flex flex-row flex-nowrap justify-center items-start relative overflow-hidden ml-2 ">
          <input
            className="w-full md:w-full h-8 text-xxs pr-2 pl-12 border border-stone-200 border-l-0 focus:border focus:outline-none focus:border-stone-300 focus:rounded-l-md rounded-l-md focus:border-l-0"
            type="text"
            name="searchBox"
            placeholder="جستجو..."
          />
          <button className="bg-[#2F80ED] absolute rounded-l-md top-0 left-0 w-10 h-8 flex justify-center items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                r="11.9847"
                transform="matrix(-1 0 0 1 16.811 15.689)"
                stroke="#F2F2F2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.47498 24.6472L3.77627 29.3337"
                stroke="#F2F2F2"
                strokeWidth="2.00785"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* <!-- hamburgur menu --> */}
        <HamburgerMenu
          className="flex flex-row flex-wrap h-10 w-1/12  items-center justify-center  "
          menuItems={menuItems}
        />
      </div>
      {/*Desktop  Header */}
      <div className=" hidden md:flex xl:hidden flex-col flex-nowrap justify-center items-center w-9/12 h-32 m-auto gap-4 font-IRANSans ">
        <div className=" flex flex-row flex-nowrap justify-between items-center w-full h-10">
          <div className=" w-1/2 flex flex-row flex-nowrap justify-start items-center ml-4">
            <Link href="/">
              <Image
                src="/images/tablet-logo.png"
                alt="logo"
                height={34}
                width={109}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex flex-row flex-nowrap justify-end items-center gap-3 w-1/2">
            <div
              className="flex flex-row flex-nowrap justify-start items-center gap-4 "
              style={{ direction: "ltr" }}
            >
              <button className="w-24 h-8 border rounded border-[#2F80ED] flex flex-row justify-center items-center py-[8px] px-[18px] bg-[#F9FBFD] text-xxs font-bold leading-4 text-[#2F80ED]">
                ورود/ثبت نام
              </button>
              <LanguageDropDown
                className="w-9 h-8 flex relative"
                showLabel={false}
              />
              {/* <ReactFlagsSelect
                id="lang-select"
                selected="IR"
                onSelect={() => {}}
                countries={["IR", "GB"]}
                showSelectedLabel={false}
                showOptionLabel={false}
                selectedSize={10}
                optionsSize={10}
                selectButtonClassName="!justify-center !pl-1 !item-center !h-8 !w-10 !bg-white !border-none "
                placeholder="Select Language"
              /> */}
            </div>
            <div className="flex flex-wrap h-10 w-1/12 py-2 items-start justify-center">
              {/* <!-- hamburgur menu --> */}
              <HamburgerMenu className="h-full w-full" menuItems={menuItems} />
            </div>
          </div>
        </div>
        <div className=" flex flex-row flex-nowrap justify-center items-center w-full h-8 gap-0">
          <div className="w-24 h-8 bg-[#F2F2F2] relative ">
            <DropDown
              className="w-full h-full text-[9px] font-semibold relative"
              selectItems={["همه آیتم ها", "ویدئوها", "موزیک ها"]}
            />
          </div>
          <div className="w-full h-full relative  rounded-l-md overflow-hidden ">
            <input
              type="text"
              name="searchBox"
              placeholder="جستجو..."
              className="w-full h-full text-[11px] leading-4 border rounded-l-md pr-2 pl-12 border-stone-200 text-[#888888]"
            />
            <button className="bg-[#2F80ED] absolute top-0 left-0 w-[34px] h-8 flex justify-center items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="11.9847"
                  transform="matrix(-1 0 0 1 16.811 15.689)"
                  stroke="#F2F2F2"
                  strokeWidth="2.00785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.47498 24.6472L3.77627 29.3337"
                  stroke="#F2F2F2"
                  strokeWidth="2.00785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Xlarg Desktop Header */}
      <div className=" hidden xl:flex flex-col flex-nowrap justify-center items-center w-[1350px] h-52 m-auto font-IRANSans ">
        <div className=" flex flex-row flex-nowrap justify-between items-start w-full h-16 gap-0 ">
          <div className=" w-44 h-14 flex flex-row flex-nowrap justify-start items-center  ">
            <Link href="/">
              <Image
                src="/images/desktop-logo.png"
                alt="logo"
                height={55}
                width={176}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <ul className="w-6/12 h-14  list-none flex flex-row flex-nowrap justify-start items-center  gap-12 ">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <a className="text-black text-lg hover:underline">
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
              <button className="w-[150px] h-12 border-2 rounded-md border-[#2F80ED] flex flex-row justify-center items-center py-3 px-5 bg-[#F9FBFD] text-base font-bold text-[#2F80ED]">
                ورود/ثبت نام
              </button>
              <LanguageDropDown
                className="w-[60px] h-[50px] flex relative"
                showLabel={false}
              />
              {/* <ReactFlagsSelect
                id="lang-select"
                selected="IR"
                onSelect={() => {}}
                countries={["IR", "GB"]}
                showSelectedLabel={false}
                showOptionLabel={false}
                selectedSize={11}
                optionsSize={11}
                selectButtonClassName="!justify-center !pl-1 !item-center !h-12 !w-14 !bg-white !border-none "
                placeholder="Select Language"
              />*/}
            </div>
          </div>
        </div>
        <div className=" flex flex-row flex-nowrap justify-center items-center w-full h-12 gap-0 my-4">
          <div className="w-40 relative h-full font-bold text-[14px] ">
            <DropDown
              className="w-full h-full text-sm font-bold relative"
              selectItems={["همه آیتم ها", "ویدئوها", "موزیک ها"]}
            />
          </div>
          <div className="w-full h-full relative  rounded-l-md overflow-hidden ">
            <input
              type="text"
              name="searchBox"
              placeholder="جستجو..."
              className="w-full h-12 text-lg  border rounded-l-md pr-2 pl-12 border-stone-300 "
            />
            <button className="bg-[#2F80ED] absolute top-0 left-0 w-12 h-full flex justify-center items-center">
              <svg
                className="h-8 w-8"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="11.9847"
                  transform="matrix(-1 0 0 1 16.811 15.689)"
                  stroke="#F2F2F2"
                  strokeWidth="2.00785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.47498 24.6472L3.77627 29.3337"
                  stroke="#F2F2F2"
                  strokeWidth="2.00785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;