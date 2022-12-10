import InstaIcon from "@components/ui/SocialMedia/InstaIcon";
import PhoneIcon from "@components/ui/SocialMedia/PhoneIcon";
import TelegramIcon from "@components/ui/SocialMedia/TelegramIcon";
import Image from "next/image";
import Link from "next/link";
const MainFooter = () => {
  return (
    <div className="w-10/12 lg:w-9/12 xl:w-11/12 m-auto flex flex-col lg:flex-row flex-nowrap justify-center items-center lg:items-end gap-6 xl:gap-10 mt-24 mb-0 lg:mb-[76px] xl:mb-28 relative">
      <div className="relative w-[277px] h-[306px] md:w-[388px] md:h-[447px] xl:w-[625px] xl:h-[719px] flex justify-center aspect-square ">
        <Image
          alt="contact-us"
          src="/images/footer-contactus.png"
          layout="fill"
        />
      </div>
      <div className="w-full lg:1/2 flex flex-col justify-end items-start font-IRANSans gap-5">
        <h1 className="text-4xl lg:text-3xl xl:text-5xl text-right tracking-[-1.5px] leading-[60px] font-bold text-navyBluee">
          با ما در ارتباط باشید
        </h1>
        <p className="font-normal text-xxs  xl:text-[17px]  lg:leading-9 leading-[22px] text-right  text-[#343D48]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className="w-full h-max flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center flex-nowrap text-white gap-2">
            <div className="flex flex-row flex-nowrap gap-2 ">
              <button
                type="button"
                className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 text-xxs xl:text-lg flex flex-row justify-center items-center bg-gradient-to-l from-[#E08C44] to-[#FE5B84] gap-2 rounded-sm  font-medium shadow-[0_3px_26px_rgba(249,95,126,0.3)] "
              >
                <InstaIcon className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer" />
                <span>اینستاگرام</span>
              </button>
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium text-[#535353] shadow-[0_3px_26px_rgba(132,132,132,0.25)]">
                <PhoneIcon className="w-3.5 h-3.5 xl:w-5 xl:h-6 cursor-pointer" />
                <span>09127330814</span>
              </div>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 ">
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium shadow-[0_3px_26px_rgba(103,201,245,0.3)] bg-[#67C9F5]">
                <TelegramIcon className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer" />
                <span>کانال تلگرام</span>
              </div>
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium shadow-[0_3px_26px_rgba(103,201,245,0.3)] bg-[#67C9F5]">
                <TelegramIcon className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer" />
                <span>گروه تلگرام</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap justify-center items-center">
            <Link href="#">
              <span className="relative aspect-square w-[76px] h-[76px] lg:w-[93px] lg:h-[93px] xl:w-[150px] xl:h-[150px]">
                <Image
                  src="/images/samandehi-logo.png"
                  alt="samandehi"
                  layout="fill"
                />
              </span>
            </Link>
            <Link href="#">
              <span className="relative aspect-square w-[63px] h-[69px] lg:w-[78px] lg:h-[84px] xl:w-[125px] xl:h-[136px]">
                <Image
                  src="/images/enamadLogo.png"
                  alt="samandehi"
                  layout="fill"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:inline-block absolute -left-[124px] -bottom-2 h-[75px] w-[75px]">
        <Image
          src="/images/message.png"
          alt="message"
          width={75}
          height={75}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MainFooter;
