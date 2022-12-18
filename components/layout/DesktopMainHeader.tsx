import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";

import LanguageDropDown from "@components/layout/LanguageDropDown";
import HamburgerMenu from "@components/ui/HamburgerMenu";
import DropDown from "@components/ui/Dropdown";
import SearchIcon from "@components/ui/SearchIcon";
type item = {
  label: string;
  href: string;
};
const DesktopMainHeader: React.FC<{
  Items: item[];
  session: Session;
  isLoading: boolean;
  logOutHandler: () => void;
}> = ({ Items, session, isLoading, logOutHandler }) => {
  return (
    <div className=" hidden md:flex xl:hidden flex-col flex-nowrap justify-center items-center w-9/12 h-32 m-auto gap-4 font-IRANSans ">
      <div className=" flex flex-row flex-nowrap justify-between items-center w-full h-10">
        <div className=" w-1/2 flex flex-row flex-nowrap justify-start items-center ml-4">
          <Link href="/" passHref>
            <a>
              <Image
                src="/images/tablet-logo.png"
                alt="logo"
                height={34}
                width={109}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-row flex-nowrap justify-end items-center gap-3 w-1/2">
          <div
            className="flex flex-row flex-nowrap justify-start items-center gap-4 "
            style={{ direction: "ltr" }}
          >
            {session && !isLoading ? (
              <button
                onClick={logOutHandler}
                className=" h-8 border rounded border-[#2F80ED] flex flex-row justify-center items-center py-[8px] px-[18px] bg-[#F9FBFD] text-xxs font-bold leading-4 text-[#2F80ED] cursor-pointer"
              >
                خروج از حساب
              </button>
            ) : (
              <Link href="/user-account/login" passHref>
                <a className="w-24 h-8 border rounded border-[#2F80ED] flex flex-row justify-center items-center py-[8px] px-[18px] bg-[#F9FBFD] text-xxs font-bold leading-4 text-[#2F80ED]">
                  ورود/ثبت نام
                </a>
              </Link>
            )}

            <LanguageDropDown
              className="w-[37px] h-8 flex relative"
              showLabel={false}
            />
          </div>
          <div className="flex flex-wrap h-10 w-1/12 py-2 items-start justify-center">
            {/* <!-- hamburgur menu --> */}
            <HamburgerMenu className="h-full w-full" menuItems={Items} />
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
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopMainHeader;
