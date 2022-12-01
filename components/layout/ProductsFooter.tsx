import FacebookIcon from "@components/ui/SocialMedia/FacebookIcon";
import InstaIcon from "@components/ui/SocialMedia/InstaIcon";
import LinkedinIcon from "@components/ui/SocialMedia/LinkedinIcon";
import TelegramIcon from "@components/ui/SocialMedia/TelegramIcon";
import TwitterIcon from "@components/ui/SocialMedia/TwitterIcon";
import Image from "next/image";
import Link from "next/link";
const ProductsFooter = () => {
  return (
    <div className="bg-white w-full md:w-9/12 xl:w-[1350px] flex flex-col md:flex-row flex-nowrap justify-center md:justify-between items-center h-44 md:h-16 xl:h-[102px] mt-12 lg:mt-16 xl:mt-24 md:px-4 pb-12 pt-8 gap-4 m-auto md:rounded-md md:py-8 md:mb-8 xl:mb-12">
      <div className="flex flex-col md:flex-row justify-center items-center flex-nowrap gap-4">
        <Link href="/">
          <div className="flex flex-row flex-nowrap justify-center items-center gap-1 cursor-pointer ">
            <div className="xl:hidden border flex items-center ">
              <Image
                alt="Tik3d"
                src="/images/dolphine-logo.png"
                height={34}
                width={34}
                objectFit="contain"
              />
            </div>
            <div className="hidden xl:flex items-center ">
              <Image
                alt="Tik3d"
                src="/images/dolphine-logo.png"
                height={55}
                width={55}
                objectFit="contain"
              />
            </div>
            <div className="md:hidden ">
              <Image
                alt="Tik3d"
                src="/images/tik3d-footer-logo.png"
                height={10}
                width={30}
                objectFit="contain"
              />
            </div>
          </div>
        </Link>
        <p className="text-xxs xl:text-base xl:leading-8 font-IRANSans font-normal leading-5 text-center text-black">
          تمامی حقوق برای سایت Tik3d محفوظ است.
        </p>
      </div>
      <div className="flex flex-row flex-nowrap justify-center items-center gap-4">
        <button className="shadow-[0_0_11px_rgba(0,0,0,0.1)] w-8 h-7 flex flex-row justify-center items-center xl:rounded xl:w-14 xl:h-11 ">
          <Link href="#">
            <InstaIcon />
          </Link>
        </button>
        <button className="shadow-[0_0_11px_rgba(0,0,0,0.1)]  w-8 h-7 flex flex-row justify-center items-center xl:rounded xl:w-14 xl:h-11">
          <Link href="#">
            <TelegramIcon />
          </Link>
        </button>
        <button className="shadow-[0_0_11px_rgba(0,0,0,0.1)]  w-8 h-7 flex flex-row justify-center items-center xl:rounded xl:w-14 xl:h-11">
          <Link href="#">
            <FacebookIcon />
          </Link>
        </button>
        <button className="shadow-[0_0_11px_rgba(0,0,0,0.1)]  w-8 h-7 flex flex-row justify-center items-center xl:rounded xl:w-14 xl:h-11">
          <Link href="#">
            <TwitterIcon />
          </Link>
        </button>
        <button className="shadow-[0_0_11px_rgba(0,0,0,0.1)]  w-8 h-7 flex flex-row justify-center items-center xl:rounded xl:w-14 xl:h-11">
          <Link href="#">
            <LinkedinIcon />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsFooter;
