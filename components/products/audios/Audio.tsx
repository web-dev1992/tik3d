import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductLayout from "@components/layout/ProductLayout";
import ReactPlayer from "react-player";
import Image from "next/image";
import DownloadIcon from "@components/ui/DownloadIcon";
import ReportIcon from "@components/ui/ReportIcon";
import Comment from "@components/products/Comment";
import StarRating from "@components/ui/StarRating";
import AudioPlayer from "@components/ui/PlayerComponents/AudioPlayer";
const Dummy_Audio_Item = {
  id: "a1",
  name: "نام آیتم 25 کاراکتری",
  fileAddress: "/musics/Earth.mp3",
  renderMotorName: "Vray",
  version: "Autodesk 3ds Max 2012",
  style: "Modern",
  ManufacturerSite: "exaple.ir",
  tags: [
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
  ],
  ligthImage: "/images/audio-larg-poster.png",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  isSpecial: true,
};
const Dummy_Comments = [
  {
    id: "c1",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 4,
    image: "/images/denny.png",
  },
  {
    id: "c2",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 5,
    image: "/images/denny.png",
  },
  {
    id: "c3",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 3,
    image: "/images/denny.png",
  },
];
const downloads = [
  {
    id: "d1",
    fileName: "دانلود مدل تری دی مکس(عادی)",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d2",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d3",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d4",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d5",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d6",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d7",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
];

const Audio = () => {
  const router = useRouter();
  const [hasWindow, setHasWindow] = useState(false);
  const [showReoprt, setShowReport] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const showReoprtHandler = () => {
    setShowReport((prev) => !prev);
  };
  return (
    <ProductLayout>
      <div className="bg-white w-full m-auto flex flex-col flex-nowrap  pb-14 ">
        {/* <SiteMap/> */}
        <p className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  text-right font-IRANSans text-[#0F2137] text-[8px] xl:text-xs font-light opacity-60 leading-3 mt-4 lg:mt-[42px] xl:mt-16 px-2 lg:px-4 xl:px-10">
          خانه / متریال / آشپرخانه
        </p>
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-2 mt-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* audio player component */}
            <AudioPlayer fileAddress="/musics/Earth.mp3" />
          </div>
          {/* introduction */}
          <div className="w-full px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans text-[#0F2137] gap-6 xl:gap-12">
            <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal -mb-1 lg:mb-0">
              {Dummy_Audio_Item.name}
            </h2>
            <div className="w-full flex flex-col flex-nowrap font-medium opacity-60 bg-[rgba(234,234,234,0.4)] rounded-md px-3 xl:px-6 divide-y divide-[#F0F0F0] ">
              <div className="w-full h-14 xl:h-24 flex flex-row flex-nowrap items-center ">
                <div className="w-1/2 text-right text-[11px] xl:text-lg ">
                  موتور رندر:
                </div>
                <div className="w-1/2 text-left text-xxs xl:text-base text-[#535353] ">
                  {Dummy_Audio_Item.renderMotorName}
                </div>
              </div>
              <div className="w-full h-14 xl:h-24 flex flex-row flex-nowrap items-center  ">
                <div className="w-1/2 text-right text-[11px] xl:text-lg">
                  ورژن:
                </div>
                <div className="w-1/2 text-left text-xxs xl:text-base text-[#535353]">
                  {Dummy_Audio_Item.version}
                </div>
              </div>
              <div className="w-full h-14 xl:h-24 flex flex-row flex-nowrap items-center  ">
                <div className="w-1/2 text-right text-[11px] xl:text-lg">
                  سبک:
                </div>
                <div className="w-1/2 text-left text-xxs xl:text-base text-[#535353]">
                  {Dummy_Audio_Item.style}
                </div>
              </div>
              <div className="w-full h-14 xl:h-24 flex flex-row items-center  flex-nowrap">
                <div className="w-1/2 text-right text-[11px] xl:text-lg">
                  سایت سازنده:
                </div>
                <div className="w-1/2 text-left text-xxs xl:text-base text-[#535353]">
                  {Dummy_Audio_Item.ManufacturerSite}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col flex-nowrap font-medium opacity-60 bg-[rgba(234,234,234,0.4)] font-IRANSans text-[#0F2137] rounded-md px-3 py-4">
              <div className="w-full flex flex-row justify-start items-center h-max lg:pt-2 lg:pb-9 xl:pt-7 xl:pb-12 gap-4">
                <div className="w-max h-full text-[11px] xl:text-lg pr-3 ">
                  تگ ها:
                </div>
                <div className="w-9/12 xl:w-10/12 h-full text-right text-xxs xl:text-[13px] text-[#4F96FF]">
                  {Dummy_Audio_Item.tags.map((tag, index) => (
                    <>
                      <span
                        key={index}
                        className=" tex-[8px] font-medium leading-3"
                      >
                        {tag}
                      </span>
                      <span> ،&nbsp;</span>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto flex flex-col flex-nowrap pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start xl:gap-4 lg:gap-1  mt-4">
          {/* description */}
          <div className=" w-full  lg:w-[55%] px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans text-[#0F2137] gap-2   ">
            <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
              توضیحات
            </h2>
            <p className="w-full text-[8px] lg:text-[9px] xl:text-sm font-light leading-5 xl:leading-6 tracking-wider text-[#666] text-right bg-white shadow-[0_4px_21px_rgba(38,78,118,0.08)] rounded-[10px] xl:rounded-[20px] xl:py-[88px] xl:pr-[61px] xl:pl-20 lg:py-14 lg:pr-[38px] lg:pl-[50px] p-6 xl:px-6 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          {/* downloads */}
          <div className=" w-full lg:w-[45%]  px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans  gap-2  mt-8 lg:mt-0 ">
            <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
              بخش دانلود
            </h2>
            <div className="w-full flex flex-col justify-center items-center shadow-[0_4px_21px_rgba(38,78,118,0.08)] text-[9px] text-[#959595] font-medium leading-5 tracking-wide  text-right bg-white rounded-[10px] xl:rounded-[20px] p-6  gap-2 xl:gap-3">
              {downloads.map((download) => (
                <div
                  key={download.id}
                  className="w-full xl:h-12 bg-[#F7F7F7] group hover:bg-[#0051FF] hover:cursor-pointer  hover:text-white rounded xl:rounded-lg flex flex-row justify-between items-center py-1 px-3"
                >
                  <div className="flex text-[#1B1A21] text-[8px] lg:text-xxs xl:text-base xl:leading-6 font-medium gap-1">
                    {download.fileName}
                    <span className="text-[#959595] opacity-60 group-hover:text-abiStroke">
                      {download.size} MB
                    </span>
                  </div>
                  <button
                    className="hover:text-white"
                    onClick={() => {
                      router.push(download.link);
                    }}
                  >
                    <DownloadIcon />
                  </button>
                </div>
              ))}
              <div className="w-full flex flex-col flex-nowrap justify-center items-center text-[#EB5757] font-IRANSans gap-2">
                <div className="flex flex-row justify-end items-center w-full h-max text-[6px] font-light leading-[9px]">
                  <button
                    onClick={showReoprtHandler}
                    className="flex flex-row flex-nowrap justify-center items-center text-[6px] lg:text-[8px] xl:text-xs gap-1"
                  >
                    <ReportIcon />
                    گزارش خرابی لینک
                  </button>
                </div>
                {showReoprt && (
                  <form className="w-full h-max flex flex-col flex-nowrap justify-center items-center gap-1 xl:gap-2">
                    <input
                      type="text"
                      placeholder="گزارش خود را بنویسید"
                      id="reportInput"
                      className="w-full h-6 xl:h-12  text-[#EB5757] placeholder-[#EB5757] text-[8px] lg:text-xxs xl:text-base font-light border border-[#EB5757] rounded xl:rounded-lg px-3 xl:px-[22px]"
                    />
                    <button className="w-full h-6 xl:h-12 text-white bg-[#EB5757] flex flex-row justify-center items-center  text-[9px] lg:text-xxs xl:text-base font-bold leading-3 rounded xl:rounded-lg">
                      ثبت گزارش
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto flex flex-col flex-nowrap  justify-center items-start  lg:gap-2 mt-4">
          <h2 className="font-bold px-3 text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
            نظرات
          </h2>
          <div className="w-full  flex flex-col flex-nowrap justify-center items-start lg:flex-row lg:justify-start font-IRANSans xl:gap-4 lg:gap-1  ">
            {/* comments */}
            <div className="px-3 w-full lg:w-[55%] flex flex-col flex-nowrap justify-center items-start gap-4 lg:gap-6 xl:gap-9">
              {Dummy_Comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
            {/* insert comment */}
            <div className=" w-full lg:w-[45%]  px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans  gap-2  mt-8 lg:mt-0 ">
              <div className="w-full flex flex-col justify-center items-center p-6  shadow-[0_4px_21px_rgba(38,78,118,0.08)] text-[9px] text-white bg-[#2F80ED] text-right rounded-[10px] xl:rounded-[20px] px-8 lg:px-10 xl:px-16 py-6 lg:py-7 xl:py-11 gap-2 xl:gap-3">
                <h5 className="w-full text-white text-sm lg:text-base xl:text-[25px] xl:font-medium font-normal leading-8 xl:leading-10 text-right ">
                  ثبت دیدگاه
                </h5>
                <form className="w-full flex flex-col flex-nowrap justify-center items-center gap-4 xl:gap-8">
                  <div className="w-full flex flex-row justify-start items-center text-[8px] lg:text-xxs xl:text-base gap-2">
                    <label htmlFor="rate">امتیاز شما:</label>
                    <StarRating />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
                    <label htmlFor="commentText">دیدگاه شما:</label>
                    <textarea
                      rows={10}
                      cols={45}
                      className="rounded-md w-full h-[138px] lg:h-40 xl:h-64"
                    ></textarea>
                  </div>
                  <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
                    <label htmlFor="user-name">
                      نام شما:<span className="text-[#EB5757]">*</span>
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
                    <label htmlFor="email">
                      ایمیل شما:<span className="text-[#EB5757]">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <button className="bg-[#FBBC05] rounded-sm lg:rounded h-8 w-20 lg:w-24 lg:h-9 xl:w-[150px] xl:h-14 xl:rounded-[5px] text-[9px] lg:text-xxs xl:text-base lg:leading-4 font-bold text-center">
                      ثبت دیدگاه
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Audio;
