import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Image from "next/image";
const HomeItro = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const playButton = (
    <button className="relative aspect-square w-[90px] h-[90px] lg:w-[136px] lg:h-[136px] xl:w-[220px] xl:h-[220px]">
      <Image alt="playButton" src="/images/play.png" layout="fill" />
    </button>
  );

  return (
    <div className="w-full bg-[#F6F8FB] lg:pt-[117px] pb-[60px] xl:pt-[189px] xl:pb-24 xl:px-72 lg:px-44 pr-[22px] pl-9 ">
      <div className="h-max flex flex-col lg:flex-row-reverse flex-nowrap  justift-start md:justify-center items-center w-full m-auto">
        <div className="aspect-square flex justify-center items-center w-7/12 mt-12 lg:mt-0 mix-blend-darken ">
          {hasWindow && (
            <ReactPlayer
              url="/videos/webpack.mp4"
              controls={true}
              light="/images/design-home-image.png"
              playIcon={playButton}
              volume={0.5}
              width="100%"
              height="100%"
            />
          )}
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start text-navyBluee font-IRANSans ">
          <h1 className="text-right text-4xl xl:text-5xl xl:leading-[80px] font-bold leading-[47px] tracking-tight text-navyBlue my-4">
            ۲۰ برابر سریع تر طراحی کنید!
          </h1>
          <p className="w-full  text-xxs  lg:text-base xl:text-lg xl:leading-7 font-normal text-right leading-4 tracking-wide text-navyBlue">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد،
          </p>
          <div className="w-full flex flex-col gap-4 flex-nowrap justify-start items-start">
            <div className="w-full flex flex-row gap-4 flex-nowrap justify-start items-start mt-6 ">
              <button className="flex flex-row justify-center items-center text-white text-xs xl:text-sm font-bold w-32 xl:w-[180px] xl:h-16 h-11 px-3.5 py-3 xl:py-5 xl:px-[18px] rounded-[3px] bg-abi">
                دانلود ورژن 5.6.0
              </button>
              <button className="flex flex-row justify-center items-center text-gray-400 w-32 h-11 bg-white text-xs xl:text-sm xl:w-[180px] xl:h-16 font-medium px-3.5 py-3 rounded-[3px] xl:rounded-lg shadow-[0_10px_50px_rgba(48,98,145,0.08)]">
                سوالات متداول
              </button>
            </div>
            <div className="flex flex-col text-[8px] xl:text-sm xl:leading-5 font-extralight text-right leading-none text-navyBlue">
              <p>حجم فایل: 8.98 مگابایت</p>
              <p>تعداد دانلود: 3،919</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItro;
