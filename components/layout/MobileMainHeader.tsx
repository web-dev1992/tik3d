import HamburgerMenu from "@components/ui/HamburgerMenu";
import SearchIcon from "@components/ui/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
type item = {
  label: string;
  href: string;
};
const MobileMainHeader: React.FC<{
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
    <div className="lg:hidden flex flex-row flex-nowrap justify-between items-center w-full h-9 m-auto font-IRANSans mt-8  ">
      <div className=" w-4/12 flex flex-row flex-nowrap justify-start items-center ">
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
      <form
        onSubmit={submitHandler}
        className=" w-7/12 h-8 flex flex-row flex-nowrap justify-center items-start relative overflow-hidden ml-2 "
      >
        <input
          ref={searchRef}
          className="w-full md:w-full h-8 text-xxs pr-2 pl-12 border border-stone-200 border-l-0 focus:border focus:outline-none focus:border-stone-300 focus:rounded-l-md rounded-l-md focus:border-l-0"
          type="text"
          name="searchBox"
          placeholder="جستجو..."
        />
        <button
          type="submit"
          className="bg-[#2F80ED] absolute rounded-l-md top-0 left-0 w-10 h-8 flex justify-center items-center"
        >
          <SearchIcon className="w-[18px] h-[18px]" />
        </button>
      </form>

      {/* <!-- hamburgur menu --> */}
      <HamburgerMenu
        className="flex flex-row flex-wrap h-10 w-1/12  items-center justify-center  "
        menuItems={Items}
      />
    </div>
  );
};

export default MobileMainHeader;
