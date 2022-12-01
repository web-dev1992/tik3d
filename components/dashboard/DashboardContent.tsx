import AddCircleIcon from "@components/ui/AddCircleIcon";
import InstaIcon from "@components/ui/SocialMedia/InstaIcon";
import PhoneIcon from "@components/ui/SocialMedia/PhoneIcon";
import TelegramIcon from "@components/ui/SocialMedia/TelegramIcon";
import { Fragment } from "react";

type date = { day: number; month: number; year: number };

const DashboardContent = () => {
  return (
    <Fragment>
      <div className="w-full lg:w-9/12 border border-[#4F96FF] rounded-3xl xl:rounded-[40px] flex flex-col flex-nowrap justify-center items-center gap-6 lg:gap-8 xl:gap-10 lg:mb-32 xl:mb-56">
        <div className="bg-abiStroke rounded-b-xl xl:rounded-b-3xl text-white h-10 w-[132px] lg:w-[151px] xl:w-60 xl:h-[73px] lg:h-11 text-sm lg:text-base xl:text-2xl font-bold flex flex-row justify-center items-center ">
          مدت اعتبار اشتراک
        </div>
        <div
          className="flex flex-row flex-nowrap justify-center items-center gap-4 lg:gap-[30px] xl:gap-12 text-xl lg:text-2xl xl:text-4xl text-[#0F2137] leading-[30px] font-medium"
          style={{ direction: "ltr" }}
        >
          <span>1401</span>
          <span className="text-[#4F96FF]">/</span>
          <span>08</span>
          <span className="text-[#4F96FF]">/</span>
          <span>03</span>
        </div>
        <button className="flex flex-row flex-nowrap justify-center items-center gap-1 text-[#4F96FF] text-sm lg:text-base xl:text-2xl leading-7">
          <AddCircleIcon />
          افزودن
        </button>
        <div className="bg-[#4F96FF] rounded-t-xl xl:rounded-t-3xl text-white h-10 w-[132px] lg:w-[151px] lg:h-11 xl:w-60 xl:h-[73px]  text-sm lg:text-base xl:text-2xl font-bold flex flex-row justify-center items-center ">
          227 روز مانده
        </div>
      </div>
      <div className="lg:absolute lg:-bottom-5 flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6 ">
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6">
          <button className="w-28 h-10 xl:h-16 xl:w-[180px] bg-white rounded xl:rounded-[5px] px-2.5 py-3 flex flex-row flex-nowrap justify-center items-center gap-2 text-[#535353] text-[11px] xl:text-lg leading-[22px] font-medium shadow-[0_3px_30px_rgba(132,132,132,0.25)] xl:shadow-[0_6px_47px_rgba(132,132,132,0.25)]">
            <PhoneIcon />
            <span>09127330814</span>
          </button>
          <button className="w-28 h-10 xl:h-16 xl:w-[180px] bg-white rounded xl:rounded-[5px] px-2.5 py-3 flex flex-row flex-nowrap justify-center items-center gap-2 text-[#535353] text-[11px] xl:text-lg leading-[22px] font-medium shadow-[0_3px_30px_rgba(132,132,132,0.25)] xl:shadow-[0_6px_47px_rgba(132,132,132,0.25)]">
            <InstaIcon />
            <span>اینستاگرام</span>
          </button>
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6">
          <button className="w-28 h-10 xl:h-16 xl:w-[180px] bg-white rounded xl:rounded-[5px] px-2.5 py-3 flex flex-row flex-nowrap justify-center items-center gap-2 text-[#535353] text-[11px] xl:text-lg leading-[22px] font-medium shadow-[0_3px_30px_rgba(132,132,132,0.25)] xl:shadow-[0_6px_47px_rgba(132,132,132,0.25)]">
            <TelegramIcon />
            <span>کانال تلگرام</span>
          </button>
          <button className="w-28 h-10 xl:h-16 xl:w-[180px] bg-white rounded xl:rounded-[5px] px-2.5 py-3 flex flex-row flex-nowrap justify-center items-center gap-2 text-[#535353] text-[11px] xl:text-lg leading-[22px] font-medium shadow-[0_3px_30px_rgba(132,132,132,0.25)] xl:shadow-[0_6px_47px_rgba(132,132,132,0.25)]">
            <TelegramIcon />
            <span>گروه تلگرام</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardContent;
