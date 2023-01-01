import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import DropDown from "@components/ui/Dropdown";
import HamburgerMenu from "@components/ui/HamburgerMenu";
type item = {
  label: string;
  href: string;
};

const ProductMobileMainHeader: React.FC<{
  Items: item[];
  searchHandler: (searchKey: string) => void;
}> = ({ Items, searchHandler }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event) => {
    event.preventDefault();
    const searchKey = searchRef.current.value;
    searchHandler(searchKey);
  };
  return (
    <div className="bg-[#F6F8FB]  md:hidden flex flex-col flex-nowrap justify-center  items-center w-11/12 h-max m-auto font-IRANSans pt-8 pb-6 gap-8">
      <div className="flex flex-row flex-nowrap justify-between items-center w-full h-8 gap-0 ">
        <div className="w-4/12 flex flex-row flex-nowrap justify-start items-center ">
          <Link href="/" passHref>
            <a className="flex items-center">
              <Image
                src="/images/mobile-logo.png"
                alt="logo"
                height={35}
                width={87}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap h-10 w-1/12 py-2 items-start justify-end ">
          {/* <!-- hamburgur menu --> */}
          <HamburgerMenu
            className="h-full w-full flex flex-row items-center justify-end flex-wrap "
            menuItems={Items}
          />
        </div>
      </div>
      <div className=" flex flex-row flex-nowrap justify-center items-center w-full h-8  gap-0 m-auto">
        <div className="w-3/12 h-8 bg-[#F2F2F2] relative ">
          <DropDown className="w-full h-full text-[8px] font-semibold relative" />
        </div>
        <form
          onSubmit={submitHandler}
          className="w-9/12 h-full relative  rounded-l-md overflow-hidden "
        >
          <input
            type="text"
            ref={searchRef}
            name="searchBox"
            placeholder="جستجو..."
            className="w-full h-full text-[9px] leading-4 border rounded-l-md pr-2 pl-12 border-stone-200 text-[#888888]"
          />
          <button
            type="submit"
            className="bg-[#2F80ED] absolute top-0 left-0 w-[40px] h-8 flex justify-center items-center"
          >
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
        </form>
      </div>
    </div>
  );
};

export default ProductMobileMainHeader;
