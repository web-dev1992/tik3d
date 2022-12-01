import Link from "next/link";
import Image from "next/image";
import ReturnArrowIcon from "@components/ui/ReturnArrowIcon";
const SignupLoginHeader = () => {
  return (
    <div className="w-[88%] lg:w-10/12 xl:w-[1350px] h-9 md:h-12 xl:h-14  flex flex-row flex-nowrap justify-between items-center my-8 xl:my-[34px] mx-6 m-auto">
      <div className="w-4/12 flex md:hidden flex-row flex-nowrap justify-start items-center ">
        <Link href="/">
          <>
            <Image
              src="/images/mobile-logo.png"
              alt="logo"
              height={35}
              width={87}
              className="cursor-pointer"
            />
          </>
        </Link>
      </div>
      <div className=" w-1/2 hidden  md:flex xl:hidden flex-row flex-nowrap justify-start items-center ml-4">
        <Link href="/">
          <>
            <Image
              src="/images/tablet-logo.png"
              alt="logo"
              height={34}
              width={109}
              className="cursor-pointer"
            />
          </>
        </Link>
      </div>
      <div className=" w-44 h-14 hidden xl:flex flex-row flex-nowrap justify-start items-center  ">
        <Link href="/">
          <>
            <Image
              src="/images/desktop-logo.png"
              alt="logo"
              height={55}
              width={176}
              className="cursor-pointer"
            />
          </>
        </Link>
      </div>

      <Link href="/" legacyBehavior passHref>
        <a className="flex justify-end w-4 md:hidden">
          <ReturnArrowIcon />
        </a>
      </Link>
      <Link href="/" legacyBehavior passHref>
        <a className="w-36 h-10 xl:w-64 xl:h-14 border-2 rounded-[5px] border-[#2F80ED] hidden md:flex flex-row justify-center items-center  bg-[#F9FBFD] text-xs xl:text-base font-bold  text-[#2F80ED]">
          بازگشت به صفحه اصلی
        </a>
      </Link>
    </div>
  );
};

export default SignupLoginHeader;
