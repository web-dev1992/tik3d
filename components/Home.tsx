import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import MainLayout from "./layout/MainLayout";
import Carousel from "@components/ui/Carousel";
import Services from "@components/mainPage/Services";
import Ad from "@components/mainPage/Ad";
import Tik3dDesignApp from "@components/mainPage/Tik3dDesignApp";

import CommentList from "./ui/CommentLsit";
import Clients from "./ui/Clients";
import MainFooter from "./layout/MainFooter";
import Tik3dBanner from "./mainPage/Tik3dBanner";
const HomeContent = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const playButton = (
    <button>
      <Image alt="playButton" src="/images/play.png" width={90} height={90} />
    </button>
  );
  return (
    <MainLayout>
      <div className="w-full bg-[#F6F8FB]">
        <div className=" flex flex-col lg:flex-row-reverse flex-nowrap  justift-start md:justify-center items-start w-[317px] sm:w-9/12 lg:w-[870px] xl:w-[1400px] mr-[22px] ml-9 py-10 pb-20 md:m-auto ">
          <div className="flex lg:hidden justify-center items-start h-80 w-full py-8 mix-blend-darken ">
            {hasWindow && (
              <ReactPlayer
                url="/videos/webpack.mp4"
                controls={true}
                light="/images/design-home-image.png"
                playIcon={playButton}
                volume={0.5}
                width={317}
                height={297}
              />
            )}
          </div>

          <div className="hidden lg:flex  justify-center items-center w-1/2 h-max xl:hidden mix-blend-darken">
            {hasWindow && (
              <ReactPlayer
                url="/videos/webpack.mp4"
                controls={true}
                light="/images/design-home-image.png"
                playIcon={
                  <button>
                    <Image
                      alt="playButton"
                      src="/images/play.png"
                      width={136}
                      height={136}
                    />
                  </button>
                }
                volume={0.5}
                width={480}
                height={449}
              />
            )}
          </div>
          <div className="hidden xl:flex  justify-start items-center w-1/2 h-fit mr-4 mix-blend-darken">
            {hasWindow && (
              <ReactPlayer
                url="/videos/webpack.mp4"
                controls={true}
                light="/images/design-home-image.png"
                playIcon={
                  <button>
                    <Image
                      alt="playButton"
                      src="/images/play.png"
                      width={220}
                      height={220}
                    />
                  </button>
                }
                volume={0.5}
                width={772}
                height={723}
              />
            )}
          </div>
          <div className="w-[264px] md:w-full lg:w-1/2 h-auto flex flex-col justify-center items-start text-navyBluee font-IRANSans mr-6 lg:mr-0">
            <h1 className="text-right text-4xl xl:text-5xl xl:leading-[80px] font-bold leading-[47px] tracking-tight text-navyBlue my-4">
              ۲۰ برابر سریع تر طراحی کنید!
            </h1>
            <p className="w-full  text-xxs  lg:text-base xl:text-lg xl:leading-7 font-normal text-right leading-4 tracking-wide text-navyBlue">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
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
      <Services />
      <div className=" w-11/12   m-auto my-10 h-max flex flex-col flex-nowrap justify-center items-center font-IRANSans overflow-hidden ">
        <h1 className="w-full my-5 flex justify-start md:justify-center text-navyBluee font-bold text-xl lg:text-2xl xl:text-4xl tracking-normal">
          جدیدترین ها
        </h1>
        {hasWindow && <Carousel />}
      </div>
      <Ad />
      <Tik3dDesignApp />
      <Tik3dBanner />
      {hasWindow && <CommentList />}
      <Clients />
      <MainFooter />
    </MainLayout>
  );
};

export default HomeContent;
