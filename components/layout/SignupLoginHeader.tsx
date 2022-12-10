import Link from "next/link";
import Image from "next/image";
import ReturnArrowIcon from "@components/ui/ReturnArrowIcon";
const SignupLoginHeader = () => {
  return (
    <div className="w-[88%] lg:w-9/12 xl:w-11/12 h-9 md:h-12 xl:h-14  flex flex-row flex-nowrap justify-between items-center my-8 xl:my-[34px] mx-6 m-auto">
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
      <div className="w-1/2 h-14 hidden  md:flex  flex-row flex-nowrap justify-start items-center ml-4">
        <Link href="/">
          <span className="relative h-[34px] w-[109px] xl:h-[55px] xl:w-[176px]">
            <Image
              src="/images/desktop-logo.png"
              alt="logo"
              layout="fill"
              className="cursor-pointer"
            />
          </span>
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
