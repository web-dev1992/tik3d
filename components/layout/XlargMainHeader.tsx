import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import LanguageDropDown from "@components/layout/LanguageDropDown";
import DropDown from "@components/ui/Dropdown";
import SearchIcon from "@components/ui/SearchIcon";
import { Session } from "next-auth";

type item = {
  label: string;
  href: string;
};

const XlargMainHeader: React.FC<{
  Items: item[];
  session: Session;
  isLoading: boolean;
  logOutHandler: () => void;
  searchHandler: (searchKey: string) => void;
}> = ({ Items, session, isLoading, logOutHandler, searchHandler }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event) => {
    event.preventDefault();
    const searchKey = searchRef.current.value;
    searchHandler(searchKey);
  };
  return (
    <div className="hidden 2xl:flex flex-col flex-nowrap justify-center items-center w-full h-52 m-auto font-IRANSans ">
      <div className=" flex flex-row flex-nowrap justify-between items-start w-full h-16 gap-0 ">
        <div className=" w-44 h-14 flex flex-row flex-nowrap justify-start items-center  ">
          <Link href="/" passHref>
            <a>
              <Image
                src="/images/desktop-logo.png"
                alt="logo"
                height={55}
                width={176}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>

        <ul className="w-6/12 h-14  list-none flex flex-row flex-nowrap justify-start items-center  gap-12 ">
          {Items.map((item) => (
            <li key={item.label}>
              <Link href={item.href} passHref>
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
            {session && !isLoading ? (
              <Link href="/dashboard/" passHref>
                <a className="w-[150px] h-12 border-2 rounded-md border-[#2F80ED] flex flex-row justify-center items-center py-3 px-5 bg-[#F9FBFD] text-base font-bold text-[#2F80ED] cursor-pointer">
                  داشبورد
                </a>
              </Link>
            ) : (
              <Link href="/user-account/login" passHref>
                <a className="w-[150px] h-12 border-2 rounded-md border-[#2F80ED] flex flex-row justify-center items-center py-3 px-5 bg-[#F9FBFD] text-base font-bold text-[#2F80ED]">
                  ورود/ثبت نام
                </a>
              </Link>
            )}

            <LanguageDropDown
              className="w-[60px] h-[50px] flex relative"
              showLabel={false}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row flex-nowrap justify-center items-center w-full h-12 gap-0 my-4">
        <div className="w-40 relative h-full font-bold text-[14px] ">
          <DropDown className="w-full h-full text-sm font-bold relative" />
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full h-full relative  rounded-l-md overflow-hidden "
        >
          <input
            ref={searchRef}
            type="text"
            name="searchBox"
            placeholder="جستجو..."
            className="w-full h-12 text-lg  border rounded-l-md pr-2 pl-12 border-stone-300 "
          />
          <button
            type="submit"
            className="bg-[#2F80ED] absolute top-0 left-0 w-12 h-full flex justify-center items-center"
          >
            <SearchIcon className="h-8 w-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default XlargMainHeader;
